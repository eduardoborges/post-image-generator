import { Hono } from 'hono';
import { serveStatic } from 'hono/serve-static';

import genImage from './genImage';

const app = new Hono();

app.use('/static/*', serveStatic({ root: './' }));

app.get('/', (c) => {
  const url = new URL(c.req.url);

  const title = url.searchParams.get('title') || '';
  const date = url.searchParams.get('date') || '';
  const author = url.searchParams.get('author') || 'Eduardo Borges';

  const image = genImage(title, date, author);

  c.header('Content-Type', 'image/svg+xml');
  c.header('Cache-Control', 'public, max-age=86400');

  return c.body(image);
});

app.use('/static/*', serveStatic({ root: './static/*' }));

app.fire();
