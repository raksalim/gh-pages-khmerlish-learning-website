import { copyFile, mkdir } from 'node:fs/promises';

// Pages serves directory indexes instead of rewriting routes to the SPA.
for (const route of ['readingPractice', 'sponsor', 'login']) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile('dist/index.html', `dist/${route}/index.html`);
}
await copyFile('dist/index.html', 'dist/404.html');
