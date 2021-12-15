const express = require('express');
const config = require('./config/newConfig');

const app = express();

const port = process.env.PORT || 4000;

config(app);

app.listen(port, () => {
  console.log('*** Server Started ***');
});
