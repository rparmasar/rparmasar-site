# cloud build checkout notes

was confused about why the `cloudbuild.yaml` works without a checkout step.

> **tl;dr** — cloud build triggers automatically check out the source before your steps execute. the code is already in `/workspace` when step 1 starts.

## the two ways cloud build gets source

### 1. trigger-based (what we have)

when a trigger fires (e.g. on push to `main`), cloud build clones the repository at that commit into `/workspace` **before any step in `cloudbuild.yaml` runs**. this is part of the trigger infrastructure, not the build config. you can confirm this in the trigger settings — the "Source" section points to the repo, and that's where the fetch happens.

### 2. `gcloud builds submit`

when you run `gcloud builds submit` manually, the cli tars up your local directory, uploads it to cloud build's scratch bucket, and extracts it into `/workspace`. same result, no explicit step needed.

## when you *would* need an explicit checkout

- your trigger is on repo A but you need code from repo B mid-build
- you're aggregating source from multiple repositories
- you're using a community builder that expects source in a non-standard location

for a standard single-repo trigger setup, the source is just there. the `docker build .` in step 1 is building from `/workspace`, which already has the checked-out code.

## extra footguns

### logs bucket required when using a custom service account

when the trigger has a custom service account attached, cloud build requires either a logs bucket or explicit logging config. the fix is to add this at the top of `cloudbuild.yaml`:

```yaml
options:
  logging: CLOUD_LOGGING_ONLY
```

this ships logs to cloud logging only and removes the bucket requirement.

### nginx listens on 80, cloud run expects 8080

the original dockerfile used `nginx:alpine` which listens on port 80 by default. cloud run sets `PORT=8080` and expects the container to listen there. if the container doesn't respond on `$PORT`, deployment fails with a timeout.

**solution:** use nginx's built-in template support. create an `nginx.conf.template` with `${PORT}` as the listen directive and copy it into `/etc/nginx/templates/`:

```
server {
    listen       ${PORT} default_server;
    server_name  _;
    root   /usr/share/nginx/html;
    index  index.html;
    location / {
        try_files $uri /index.html;
    }
}
```

the `nginx:alpine` entrypoint automatically processes `.template` files from `/etc/nginx/templates/` with `envsubst` at startup, so `${PORT}` gets replaced with the actual environment variable value.

### running the same image locally

without the `PORT` env var set locally, the template variable will be empty and nginx will fail. use `-e PORT=80` (or any port):

```bash
docker build -t rparmasar-site .
docker run -p 8080:80 -e PORT=80 rparmasar-site
```

you could also make the template default-safe with `${PORT:-80}` so it works unset.
