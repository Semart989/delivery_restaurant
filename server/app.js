const express = require('express');
const config = require('./config/newConfig');

const isAuthRouter = require('./routes/isAuth.router');

const app = express();

app.use('/isauth', isAuthRouter);

const port = process.env.PORT ?? 4000;

config(app);

app.listen(port, () => {
  console.log('*** Server Started ***');
});
