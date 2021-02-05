import { put } from 'redux-saga/effects';
import axios from '../../axios';

import {
  uploadPdfStart, uploadPdfSuccess, uploadPdfFail,
  downloadPdfFail, downloadPdfStart,
  downloadPdfSuccess,
} from './actions';

export function* uploadPdfSaga(action) {
  try {
    yield put(uploadPdfStart());
    const { pdfDetails, file, userId } = action;
    const response = yield axios.get('/book/uploadurl', { params: { title: pdfDetails.title, userId } });
    const { url } = response.data;
    yield fetch(url, { body: file, method: 'PUT', headers: { 'Content-Type': 'application/pdf' } });
    yield axios.post('/book/add', { pdfDetails });
    yield put(uploadPdfSuccess());
  } catch (e) {
    yield put(uploadPdfFail(e.response.message));
  }
}

export function* downloadPdfSaga(action) {
  try {
    yield put(downloadPdfStart());
    const response = yield axios.get(`book/${action.pdfId}`);
    const { pdf } = response.data;
    yield put(downloadPdfSuccess(pdf));
  } catch (e) {
    yield put(downloadPdfFail(e));
  }
}

export function* getSinglePdfSaga(action) {
  try {
    yield put(downloadPdfStart());
    const { pdfId, userId } = action;
    const response = yield axios.get('/book/downloadurl', { params: { pdfId, userId } });
    const { url } = response.data;
    const res = yield fetch(url, {
      metod: 'GET', headers: { 'Content-Type': 'application/pdf', Accept: 'application/pdf' },
    });
    const fileWrapper = yield res.blob();
    const file = window.URL.createObjectURL(fileWrapper);
    yield put(downloadPdfSuccess(file));
  } catch (e) {
    yield put(downloadPdfFail(e));
  }
}
