import cookieParser from 'cookie-parser';
import express from 'express';
import 'express-async-errors';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';
import { setupCors } from './cors-setup';
import { attachPaginate } from './functions';
import { speedLimiter } from './middleware';
import router from './router';

const app = express();

attachPaginate();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(fileUpload());
app.use(cookieParser(process.env.COOKIE_SECRET));

// custom cors config
app.use(setupCors());

// add speed limiter for all requests
app.use(speedLimiter);

// route everything
app.use(router);

export default app;
