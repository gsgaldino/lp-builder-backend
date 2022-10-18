const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const routes = require('./routes');
const database = require('./database');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.database();
    this.routes();
    this.notFound();
  }

  database() {
    database.connect();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(helmet());
    this.server.use(morgan('dev'));
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/api/v1', routes);
  }

  notFound() {
    this.server.use('*', (_, res) => res.status(404).json({
      success: false,
      message: 'Not Found',
    }));
  }
}

module.exports = new App().server;
