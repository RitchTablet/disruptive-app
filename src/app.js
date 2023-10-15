import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import router from "./routes/routes.js";
import cors from 'cors';
import morgan from 'morgan';
import logger from './config/logger.js';
import { dataSource } from './database/typeorm.config.js';

async function bootstrap() {
  app.use(cors({ origin: '*' }));
  app.use(morgan('combined'));
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  app.use('/api', router);

  const port = process.env.PORT || 3001;
  await dataSource.initialize();

  app.listen(port, () => {
    logger.info(`El servidor está escuchando en el puerto ${port}`);
  });
}

bootstrap();
