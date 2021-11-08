import express from 'express';

const app = express();

app.get('/', (_, res) => res.json({ ok: true }));

export default app;
