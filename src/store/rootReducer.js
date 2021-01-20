import { combineReducers } from 'redux';
import pdfReducer from '../pdf-reader/store/reducer';
import authReducer from '../auth/store/reducer';

const rootReducer = combineReducers({
  pdf: pdfReducer,
  auth: authReducer,

});

export default rootReducer;
