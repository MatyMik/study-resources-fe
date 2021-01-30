import { takeLatest } from 'redux-saga/effects';
import { uploadPdfSaga, downloadPdfSaga } from './sagas';
import * as actionTypes from './actionTypes';

const pdfSagas = [
  takeLatest(actionTypes.UPLOAD_PDF, uploadPdfSaga),
  takeLatest(actionTypes.DOWNLOAD_PDF, downloadPdfSaga),
];
export default pdfSagas;
