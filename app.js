require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const origin = require('./cors/origin');
const router = require('./router');
const app = express();

const { attachPaginate } = require('./functions/paginate');
attachPaginate();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser(process.env.COOKIE_SECRET));

// custom cors config
app.use(cors({ origin, credentials: true }));

// route everything
app.use('/', router);

module.exports = app;
