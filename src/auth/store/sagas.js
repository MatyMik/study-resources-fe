import { put } from 'redux-saga/effects';
import axios from '../../axios';
import {
  loginStart, loginFail, loginSuccess,
  signupSuccess, signupStart, signupFail,
  resetPasswordSuccess, resetPasswordFail, resetPasswordStart,
  forgotPasswordStart, forgotPasswordSuccess, forgotPasswordFail,
  refreshTokenSuccess,
} from './actions';

export function* loginSaga(action) {
  try {
    yield put(loginStart());
    const response = yield axios.post('/auth/login', action.authData);
    const { token, userId } = response.data;
    console.log(response.data);
    yield put(loginSuccess(token, userId));
    action.history.push('/');
  } catch (e) {
    const error = e.response.data.errors;
    yield put(loginFail(error));
  }
}

export function* signupSaga(action) {
  try {
    yield put(signupStart());
    yield axios.post('/auth/signup', action.authData);
    yield put(signupSuccess());
    action.history.push('/auth/login');
  } catch (e) {
    const error = e.response.data.errors;
    yield put(signupFail(error));
  }
}

export function* resetPasswordSaga(action) {
  try {
    yield put(resetPasswordStart());
    yield axios.post('/auth/signup', action.authData);
    yield put(resetPasswordSuccess());
    action.history.push('/auth/login');
  } catch (e) {
    const error = e.response.data.errors;
    yield put(resetPasswordFail(error));
  }
}

export function* forgotPasswordSaga(action) {
  try {
    yield put(forgotPasswordStart());
    yield axios.post('/auth/signup', action.authData);
    yield put(forgotPasswordSuccess());
    action.history.push('/auth/login');
  } catch (e) {
    const error = e.response.data.errors;
    yield put(forgotPasswordFail(error));
  }
}

export function* refreshTokenSaga() {
  try {
    const response = yield axios.get('/auth/refreshtoken');
    const { token } = response.data;
    yield put(refreshTokenSuccess(token));
  } catch (e) {
    const error = e.response.data.errors;
    yield put(forgotPasswordFail(error));
  }
}

export function* autoLoginSaga(action) {
  try {
    yield put(loginStart());
    console.log('Here');
    const response = yield axios.get('/auth/refreshtoken');
    const { token, userId } = response.data;
    if (token && userId) { yield put(loginSuccess(token, userId)); }
    action.history.push('/');
  } catch (e) {
    console.log(e);
    if (e && e.response && e.response.data && e.response.data.errors) {
      const error = e.response.data.errors;
      yield put(loginFail(error));
    } else {
      yield put(loginFail(e));
    }
  }
}
