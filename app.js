require('dotenv').config();
require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const indexRouter = require('./router');
const app = express();

const { attachPaginate } = require('./functions/paginate');
attachPaginate();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser(process.env.COOKIE_SECRET));

// allow CORS only from app URL
app.use(cors({ origin: process.env.APP_BASE_URL, credentials: true }));

// route everything
app.use('/', indexRouter);

module.exports = app;
