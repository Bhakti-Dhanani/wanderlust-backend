import express from "express";
import dotenv from 'dotenv';
import type { Request, Response } from 'express';
import { AppDataSource } from './config/database.js';

dotenv.config();

const app = express();  
const port = process.env.PORT;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from travel-backend server!');
});
