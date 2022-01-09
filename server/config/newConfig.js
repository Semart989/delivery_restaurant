const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const sessionConfig = require('./sessionConfig');
const userMiddleware = require('../middleware/user');
const authMiddleware = require('../middleware/auth');// checking if user login, redirects to loginPage if not
// routes
const indexRouter = require('../routes/index.router');

// Добавил API гостиницы
const corsOptions = {
  origin: ['http://localhost:3000', 'https://runner-food.herokuapp.com/', 'https://hotel-api-example.herokuapp.com'],
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Подключение "секретов"
dotenv.config();

const config = (app) => {
  // middlewares
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true,
  }));

  // Использую клиентский public для deploy
  app.use(express.static(path.resolve('public')));

  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(cors(corsOptions));

  app.use(userMiddleware);
  app.use(authMiddleware);

  app.use('/', indexRouter);

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
  });
};

module.exports = config;
