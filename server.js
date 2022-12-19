const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const route = require('./routes/routes', );

const app = express();



const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode in PORT ${PORT}`
  )
);
