# Rajeev Parmasar - Personal Portfolio

A data-driven personal website built with React, deployed on Google Cloud Run via Cloud Build.

**Live Site**: [rparmasar.com](https://rparmasar.com)

[![React](https://img.shields.io/badge/React-18-black?logo=react)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/Docker-deployed-blue?logo=docker)](https://cloud.google.com/run)

## About

This is a **data-driven personal portfolio** that showcases projects, resume, and professional background. The site uses JSON files (`public/data/`) to store all content, enabling easy updates without touching React components. Built as a single-page application with React Router for client-side navigation.

## Key Features

- **Dynamic Content**: All site content (projects, bio, resume entries) is defined in JSON files
- **SPA Architecture**: Client-side routing with React Router v6 for seamless navigation
- **Responsive Design**: Bootstrap 5 grid system for mobile-first layout
- **Docker Deployment**: Production-ready container image optimized for Cloud Run
- **Cloud Build Pipeline**: Automated builds triggered on `main` branch pushes

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, React DOM, React Router v6 |
| **Styling** | Bootstrap 5, React Bootstrap |
| **Deployment** | Docker, Google Cloud Run, Cloud Build |
| **CI/CD** | GitHub Actions → GCP Workload Identity |
| **Utilities** | interweave (typography), typewriter-effect |
| **Testing** | Jest, Testing Library |

## Project Structure

```
rparmasar-site/
├── public/
│   ├── data/              # JSON content files (no React code touches this)
│   │   ├── about/
│   │   │   └── about-sections.json      # Bio sections and bio content
│   │   └── projects/
│   │       ├── overviews.json           # Project listing cards
│   │       └── single-pages.json        # Detailed project pages
│   └── images/              # Site assets
├── src/
│   ├── common/             # Reusable UI components
│   │   ├── Header/        # Sticky top navigation
│   │   ├── NavBar/        # Main navigation links
│   │   ├── Footer/        # Page footer (conditionally rendered)
│   │   └── Jumbotron/     # Hero sections with background images
│   ├── pages/              # Route-specific page components
│   │   ├── AboutMe/       # /about route
│   │   ├── ProjectList/   # /projects route  
│   │   ├── SingleProject/ # /projects/:name dynamic route
│   │   ├── Resume/        # /resume route
│   │   └── NotFound/      # 404 handler
│   ├── hooks/             # Custom React hooks
│   │   └── useLocalData.js # Fetches JSON content at runtime
│   └── App.js             # Route configuration (lines 1-36)
├── Dockerfile            # Production image definition
├── cloudbuild.yaml       # Cloud Build pipeline config
├── package.json
└── README.md
```

## Available Scripts

```bash
npm run start        # Development server at http://localhost:3000
npm run build        # Production build → build/ folder
npm test             # Interactive Jest test runner
```

### Docker Commands

```bash
docker build -t rparmasar-site .     # Build production image
docker run -p 8080:80 rparmasar-site # Test locally
```

### Deploy to Cloud Run

```bash
# From Google Cloud shell or gcloud CLI
gcloud builds submit --tag gcr.io/PROJECT_ID/rparmasar-site:latest
gcloud run deploy rparmasar-site \
  --image gcr.io/PROJECT_ID/rparmasar-site:latest \
  --region us-central1
```

## Deployment: Cloud Build → Cloud Run

### Pipeline Overview

The site is deployed to **Google Cloud Run** using **Cloud Build**, triggered automatically on pushes to the `main` branch. The pipeline:

1. **Builds Docker image** in GCP (no checkout step needed—Cloud Build provides source in `/workspace`)
2. **Pushes to Artifact Registry** for secure artifact storage
3. **Deploys to Cloud Run** with automatic scaling and managed infrastructure

### Why This Architecture?

- **Automated**: Pushes to `main` trigger builds and deployments automatically
- **Secure**: Uses GCP Workload Identity for authentication (no long-lived service accounts in GitHub)
- **Efficient**: Builds happen within GCP, avoiding large external artifact transfers
- **Observable**: Cloud Logging and Stackdriver integration for production debugging

### Key Deployment Learnings

- Cloud Build automatically checks out source to `/workspace` on trigger fire—no explicit checkout step needed in `cloudbuild.yaml`
- Nginx container uses `${PORT}` template variable for dynamic port binding (required for Cloud Run's PORT=8080)
- Custom service accounts require either a logs bucket or `CLOUD_LOGGING_ONLY` logging config

See [`docs/cloudbuild_checkout_notes.md`](docs/cloudbuild_checkout_notes.md) for deeper technical details.

## Adding/Editing Content

Since content is JSON-based, you can update the site without touching React components:

### Projects (`public/data/projects/`)
- `single-pages.json`: Detailed project pages
- `overviews.json`: Project listing cards

### About Page (`public/data/about/`)
- `about-sections.json`: Bio sections and text content

### Adding Images
Place image assets in `public/images/` or `public/images/jumbotron-bgs/` (for hero backgrounds) and reference them in JSON files.

## Resources

- [React Documentation](https://reactjs.org/)
- [React Router v6](https://reactrouter.com/)
- [Bootstrap 5](https://getbootstrap.com/docs/)
- [Google Cloud Run](https://cloud.google.com/run/docs)
- [Cloud Build Tutorials](https://cloud.google.com/cloud-build/docs/tutorials)

## License

© 2024 Rajeev Parmasar. All rights reserved.
