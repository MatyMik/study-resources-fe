import { all } from 'redux-saga/effects';
import pdfSagas from '../pdf-reader/store';
import authSagas from '../auth/store';
import topicSagas from '../topics/store';

export default function* rootSaga() {
  yield all([
    ...pdfSagas,
    ...authSagas,
    ...topicSagas,
  ]);
}
