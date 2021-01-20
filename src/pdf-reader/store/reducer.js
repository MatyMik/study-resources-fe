import * as actionTypes from './actionTypes';

const initialState = {
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPLOAD_PDF_START:
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
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
