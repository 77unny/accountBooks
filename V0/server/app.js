import express from 'express';
import mongoose from 'mongoose';
import hpp from 'hpp';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import config from './config';
import postRouter from './routes/api/post';
import userRouter from './routes/api/user';
import authRouter from './routes/api/auth';

const app = express();
const { MONGO_URI } = config;

app.use(hpp());
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan('dev'));
app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('mongoDB connecting success'))
  .catch(e => console.log(e));

app.get('/');
app.use('/api/post', postRouter);
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

export default app;
