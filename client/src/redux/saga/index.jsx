import axios from 'axios';
import dotenv from 'dotenv';
import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga';

dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_DEFAULT_URL;

export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
