const express = require('express');
const config = require('./config/newConfig');

const isAuthRouter = require('./routes/isAuth.router');
const categoryRouter = require('./routes/category.router');
//const dishRouter = require('./routes/dish.router');

const app = express();

app.use('/isauth', isAuthRouter);
app.use('/category', categoryRouter);
//app.use('/dish', isAuthRouter);

const port = process.env.PORT ?? 4000;

config(app);

app.listen(port, () => {
  console.log('*** Server Started ***');
});
