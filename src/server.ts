const express = require('express');
import type { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3001;

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from travel-backend server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
