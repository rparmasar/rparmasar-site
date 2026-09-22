# Agent Guidance for rparmasar-site

## Commands
- Dev server: `yarn start` → http://localhost:3000
- Build: `yarn build` (output in `build/`)
- Test: `yarn test`
- Docker image: `docker build -t rparmasar-site .`
- Run container: `docker run -p 8080:80 rparmasar-site`

## Architecture
- Create React App (React Router for navigation)
- Entry: `src/index.js` renders `<BrowserRouter>` → `<App>`
- Routes: `/`, `/projects`, `/projects/:name`, `/about`, `/resume`
- Common components in `src/common/`
- Pages in `src/pages/`

## Gotchas
- React.StrictMode wraps app (double-render on dev)
- Test route `/test` points to SingleProjectPage
- Footer only shows on non-root paths (`show_footer` logic in App.js)
- Bootstrap CSS imported before React components

## Style
- If creating content, always follow the style of existing pages as written in the JSONs in `public/data/`