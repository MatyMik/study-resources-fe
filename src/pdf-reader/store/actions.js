import * as actionTypes from './actionTypes';

export const downloadPdfStart = () => ({
  type: actionTypes.DOWNLOAD_PDF_START,
});

export const downloadPdfSuccess = (file) => ({
  type: actionTypes.DOWNLOAD_PDF_SUCCESS,
  file,
});

export const downloadPdfFail = (error) => ({
  type: actionTypes.DOWNLOAD_PDF_FAIL,
  error,
});

export const downloadPdf = (pdfId, userId) => ({
  type: actionTypes.DOWNLOAD_PDF,
  pdfId,
  userId,
});

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

export const getSinglePdfDataStart = () => ({ type: actionTypes.GET_SINGLE_PDF_DATA_START });

export const getSinglePdfDataSuccess = (pdfData) => ({
  type: actionTypes.GET_SINGLE_PDF_DATA_START,
  pdfData,
});

export const getSinglePdfDataFail = (error) => ({
  type: actionTypes.GET_SINGLE_PDF_DATA_FAIL,
  error,
});

export const getSinglePdfData = () => ({ type: actionTypes.GET_SINGLE_PDF_DATA });
