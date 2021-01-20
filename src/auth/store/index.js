import { takeLatest } from 'redux-saga/effects';
import {
  loginSaga, signupSaga, resetPasswordSaga, forgotPasswordSaga, refreshTokenSaga, autoLoginSaga,
} from './sagas';
import * as actionTypes from './action-types';

const authSagas = [
  takeLatest(actionTypes.LOGIN, loginSaga),
  takeLatest(actionTypes.SIGNUP, signupSaga),
  takeLatest(actionTypes.RESET_PASSWORD, resetPasswordSaga),
  takeLatest(actionTypes.FORGOT_PASSWORD, forgotPasswordSaga),
  takeLatest(actionTypes.REFRESH_TOKEN, refreshTokenSaga),
  takeLatest(actionTypes.AUTO_LOGIN, autoLoginSaga),
];
export default authSagas;
