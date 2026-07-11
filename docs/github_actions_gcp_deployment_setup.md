# github actions gcp deployment setup

some notes on things I had to do to setup the Github Actions as the deployment pipeline to build and deploy this app to Cloud Run.

## gcp auth setup via workload-identity

here are the `gcloud` commands used to setup auth (taken from https://github.com/google-github-actions/auth#preferred-direct-workload-identity-federation)

```bash
export PROJECT_ID="main-501801"

# creates a workload identity pool called 'github'
gcloud iam workload-identity-pools create "github" \
  --project="${PROJECT_ID}" \
  --location="global" \
  --display-name="github-actions-pool"

# grab the id for our pool
gcloud iam workload-identity-pools describe "github" \
  --project="${PROJECT_ID}" \
  --location="global" \
  --format="value(name)"

# now create a provider in the pool
# NOTE: this only allows the rparmasar-site repo to use this pool
gcloud iam workload-identity-pools providers create-oidc "rparmasar-site" \
  --project="${PROJECT_ID}" \
  --location="global" \
  --workload-identity-pool="github" \
  --display-name="rparmasar-site" \
  --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner" \
  --attribute-condition="assertion.repository == 'rparmasar/rparmasar-site'"\
  --issuer-uri="https://token.actions.githubusercontent.com"

# finally, get the provider resource name
gcloud iam workload-identity-pools providers describe "github-actions" \
  --project="${PROJECT_ID}" \
  --location="global" \
  --workload-identity-pool="github" \
  --format="value(name)"
```

after that, we can run use our provider resource name in the github actions yml.

## permissions issues

used the following to grant write access to our provider above to the artifact registry.artifactregistry.repositories.uploadArtifacts' 

```bash
gcloud artifacts repositories add-iam-policy-binding main \
    --location='us-central1' \
    --project='main-501801' \
    --role="roles/artifactregistry.writer" \
    --member="principalSet://iam.googleapis.com/projects/741497491033/locations/global/workloadIdentityPools/github/attribute.repository/rparmasar-site"
```