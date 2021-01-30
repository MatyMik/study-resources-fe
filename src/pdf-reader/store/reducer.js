import * as actionTypes from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  url: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPLOAD_PDF_START:
    case actionTypes.DOWNLOAD_PDF_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.UPLOAD_PDF_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.UPLOAD_PDF_FAIL:
    case actionTypes.DOWNLOAD_PDF_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.DOWNLOAD_PDF_SUCCESS:
      return { ...state, loading: false, file: action.file };
    default:
      return state;
  }
};

export default reducer;
