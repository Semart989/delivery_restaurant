const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const sessionConfig = require('./sessionConfig');
const userMiddleware = require('../middleware/user');

// const indexRouter = require('../routes/index.routes');
// const registerRouter = require('../routes/registration.routes');
// const logoutRouter = require('../routes/logout.routes');
// const loginRouter = require('../routes/login.routes');
// const profileRouter = require('../routes/profile.routes');
// const addAuctionRouter = require('../routes/addAuction.routes');
// const editAuctionRouter = require('../routes/editAuction.routes');
// const auctionRouter = require('../routes/auction.routes');

const config = (app) => {
  app.set('views', path.join(__dirname, '..', 'views'));
  // middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:5501/'],
    credentials: true,
  }));
  app.use(session(sessionConfig));
  app.use(userMiddleware);
  // routes
  // app.use('/', indexRouter);
  // app.use('/register', registerRouter);
  // app.use('/logout', logoutRouter);
  // app.use('/login', loginRouter);
  // app.use('/profile', profileRouter);
  // app.use('/add-auction', addAuctionRouter);

  // app.use('/editAuction', editAuctionRouter);
  // app.use('/auction', auctionRouter);
};

module.exports = config;
