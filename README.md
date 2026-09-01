# Lily Portfolio

Lily's personal portfolio, built with [Hexo](https://hexo.io/) and a custom `lily` theme.

## Local development

```bash
pnpm install
pnpm run server
```

Then open <http://localhost:4000/lily-portfolio/>.

## Production build

```bash
pnpm run clean
pnpm run build
```

The generated site is written to `public/`.

## Deployment

Pushes to `main` are built and deployed automatically with GitHub Actions.

Live site: <https://xiyunliu610.github.io/lily-portfolio/>

For the first deployment, set the repository's **Settings → Pages → Build and
deployment → Source** to **GitHub Actions**.

## Project structure

- `themes/lily/` — portfolio layout, styles, and browser scripts
- `source/` — Hexo content and future portfolio assets
- `_config.yml` — site-level Hexo configuration
