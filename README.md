# Khmerlish Learn

Public React + TypeScript + Vite learning site. Speaking and reading practice need no account. No Cognito configuration, Amplify outputs, AWS credentials, or backend deployment is needed to build or run the site. Audio is still served from the existing public S3 bucket in `src/data/const.ts`.

## Local development

Use Node.js 22 and run:

```sh
npm ci
npm run dev
```

Run `npm run build` to type-check and generate `dist`, then `npm run preview` to preview it.

## Audio playback

The reading keyboard prepares up to 20 visible letter sounds, prioritizing keys near the middle of the viewport and starting two requests every 150 ms. Scrolling replaces pending preparation, and changing consonant series updates the vowel URLs. Touch-down and keyboard focus also prepare the targeted key. Preparation stops on leaving the page; already cached clips remain available within the shared cache limit.

Selected speaking-practice words prepare after the picker settles for 250 ms. A shared cache retains up to 24 audio elements for words and letters; sentence playback prepares two upcoming clips while the current clip plays. A new tap stops the previous playback. Empty word selections are skipped, and background preparation is disabled when the browser reports Data Saver. Audio URLs and file formats still use the existing S3 files.

Run `npm run test:audio` for playback, caching, cancellation, and error-handling checks. These use simulated audio elements; they do not measure network latency or validate mobile playback policies. Before deployment, check iOS Safari and Android Chrome with an empty browser cache and a throttled connection: selected-word playback, repeat taps, rapid changes between buttons, and a complete sentence. Compare tap-to-sound delay on first and repeated plays. Browsers may ignore preload hints, so first-play improvements depend on the device and connection.

## Deploy the backup site

1. Create a separate GitHub repository (for example `khmerlish-learn-pages`) and push this version to its `main` branch. Keep the existing Amplify repository separate during migration.
2. In the new repository, select Settings → Pages → Source → GitHub Actions. Enable Actions if needed.
3. Set the Pages custom domain to `backup-learn.khmerlish.com` before pointing DNS at GitHub.
4. Add a DNS CNAME for `backup-learn` pointing to `raksalim.github.io` (use the actual repository owner's GitHub Pages hostname if different). The target must not include a repository path.
5. Run the Deploy to GitHub Pages workflow, wait for DNS and certificate provisioning, and enable Enforce HTTPS.
6. Check speaking practice, audio playback, reading practice, sponsor links, mobile navigation, and direct loads/refreshes of `/readingPractice` and `/sponsor`. Old `/login` links redirect to the home page.

The workflow reads the Pages base path and builds for either the default `github.io/repository/` URL or a custom domain. After changing the custom domain, rerun the workflow to rebuild asset and router paths. Local builds default to `/`; set `PAGES_BASE_PATH=/repository/` to test a project URL. With an Actions deployment, configure the custom domain in Pages settings; no CNAME file is needed.

`scripts/static-routes.mjs` generates directory index files for the known routes, preserving clean URLs without server rewrites. Add new routes to that script when adding pages. `404.html` renders the application's not-found page for unknown paths (with HTTP 404).

## Promote to learn.khmerlish.com

After validating the backup, change the Pages custom domain to `learn.khmerlish.com` and replace the DNS record for `learn` with a CNAME to the repository owner's GitHub Pages hostname. Wait for DNS/certificate provisioning and enable HTTPS. No application code change is needed. Keep the Amplify deployment available for rollback until the new site is verified.

A Pages site has one configured custom domain. To keep the backup hostname serving the site after promotion, use a second Pages deployment or configure an external redirect.

Removing authentication code does not delete Cognito, Amplify, or other AWS resources or stop their charges. After cutover, review and retire unused resources separately, checking whether other applications share them. Keep the S3 audio bucket unless the audio files have been migrated.

References: [Vite deployment](https://vite.dev/guide/static-deploy.html), [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
