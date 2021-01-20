import { all } from 'redux-saga/effects';
import pdfSagas from '../pdf-reader/store';
import authSagas from '../auth/store';

export default function* rootSaga() {
  yield all([
    ...pdfSagas,
    ...authSagas,
  ]);
}
