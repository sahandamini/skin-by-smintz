# Skin by Smintz

A premium baseline website for an esthetics practice, built with TanStack Start,
React 19, Tailwind CSS 4, and Vite+.

## Local development

Prerequisites: [mise](https://mise.jdx.dev/getting-started.html).

```sh
mise trust
mise run bootstrap
vp dev
```

Useful commands:

```sh
vp check
vp test run
vp run e2e
vp build
```

## Hosting

The app is configured for Vercel's TanStack Start framework preset and Nitro
runtime. Deploy from the repository root with:

```sh
vercel
```

Use `vercel --prod` when the production domain is ready. No application secrets
are required for this baseline site.

## Next integrations

Commerce and scheduling are intentionally not coupled to the landing page yet.
Add them behind their own route and service boundaries once the platform choice
(Hydrogen, Medusa, and booking provider) is finalized.
