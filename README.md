# Lily Portfolio

Lily's personal portfolio, built with [Hexo](https://hexo.io/) and a custom `lily` theme.

## Local development

```bash
pnpm install
pnpm run server
```

Then open <http://localhost:4000>.

## Production build

```bash
pnpm run clean
pnpm run build
```

The generated site is written to `public/`.

## Project structure

- `themes/lily/` — portfolio layout, styles, and browser scripts
- `source/` — Hexo content and future portfolio assets
- `_config.yml` — site-level Hexo configuration
