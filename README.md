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

The generated site is written to `docs/` and committed with the source files.

## Deployment

The site is built locally and published from the `docs/` folder on `main`.

Before pushing a site update, regenerate the static files:

```bash
pnpm run clean
pnpm run build
git add docs
```

Live site: <https://xiyunliu610.github.io/lily-portfolio/>

Set the repository's **Settings → Pages → Build and deployment → Source** to
**Deploy from a branch**, then select **main** and **/docs**.

## Project structure

- `themes/lily/` — portfolio layout, styles, and browser scripts
- `source/` — Hexo content and portfolio assets
- `docs/` — generated static site published by GitHub Pages
- `_config.yml` — site-level Hexo configuration
