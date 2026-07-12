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
