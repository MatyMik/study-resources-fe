import { combineReducers } from 'redux';
import pdfReducer from '../pdf-reader/store/reducer';
import authReducer from '../auth/store/reducer';
import topicReducer from '../topics/store/reducer';

const rootReducer = combineReducers({
  pdf: pdfReducer,
  auth: authReducer,
  topic: topicReducer,
});

export default rootReducer;
