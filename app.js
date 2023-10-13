require('dotenv').config();

const express = require('express');
const app = express();

const routes = require('./routes/routes');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./config/logger');

app.use(cors({ origin: '*' }));
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api', routes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  logger.info(`El servidor está escuchando en el puerto ${port}`);
});
