import { takeLatest } from 'redux-saga/effects';
import updatePdfSaga from './sagas';
import * as actionTypes from './actionTypes';

const pdfSagas = [
  takeLatest(actionTypes.UPLOAD_PDF, updatePdfSaga),
];
export default pdfSagas;
