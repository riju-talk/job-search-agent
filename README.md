# Executive Career Agent

An Electron-ready, local-first workspace for a senior banking executive to
review high-signal opportunities, understand fit honestly, and keep an
application search organized.

## Current slice

- React + Vite renderer with Today, Opportunity Inbox, Application Tracker,
  Master Resume, and Settings views
- Local-only seed data and interactions for the first product pass
- Electron main process with a secure preload bridge
- No backend, authentication, scraping, auto-submission, or agent
  infrastructure in this initial scaffold

## Run

```bash
pnpm install
pnpm --filter @workspace/executive-career-agent run dev
```

For a local desktop window:

```bash
pnpm --filter @workspace/executive-career-agent run electron:dev
```