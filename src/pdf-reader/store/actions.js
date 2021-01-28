import * as actionTypes from './actionTypes';

export const uploadPdfStart = () => ({
  type: actionTypes.UPLOAD_PDF_START,
});

export const uploadPdfSuccess = (url) => ({
  type: actionTypes.UPLOAD_PDF_SUCCESS,
  url,
});

export const uploadPdfFail = (error) => ({
  type: actionTypes.UPLOAD_PDF_FAIL,
  error,
});

export const uploadPdf = (pdfDetails, file, userId) => ({
  type: actionTypes.UPLOAD_PDF,
  pdfDetails,
  file,
  userId,
});
