import { put } from 'redux-saga/effects';
import axios from '../../axios';

import { uploadPdfStart, uploadPdfSuccess, uploadPdfFail } from './actions';

function* getUploadPdfLinkSaga(action) {
  try {
    yield put(uploadPdfStart());
    const { pdfDetails, file } = action;
    const response = yield axios.get('/pdf', { params: { fileName: pdfDetails.fileName } });
    const { url } = response.data;
    const pdfData = { ...pdfDetails, url };
    yield fetch(url, { body: file, method: 'PUT', headers: { 'Content-Type': 'application/pdf' } });
    yield axios.post('/pdf', { pdfDetails: pdfData });
    yield put(uploadPdfSuccess());
  } catch (e) {
    yield put(uploadPdfFail(e.response.message));
  }
}

export default getUploadPdfLinkSaga;
