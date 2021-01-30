import { takeLatest } from 'redux-saga/effects';
import {
  loadResourceSaga,
  addTopicSaga,
  loadAllTopicsSaga,
  deleteTopicSaga,
  addResourceSaga,
  editTopicSaga,
  updateResourceSaga,
} from './sagas';
import * as actionTypes from './action-types';

const authSagas = [
  takeLatest(actionTypes.LOAD_RESOURCE, loadResourceSaga),
  takeLatest(actionTypes.ADD_TOPIC, addTopicSaga),
  takeLatest(actionTypes.LOAD_ALL_TOPICS, loadAllTopicsSaga),
  takeLatest(actionTypes.DELETE_TOPIC, deleteTopicSaga),
  takeLatest(actionTypes.ADD_RESOURCE, addResourceSaga),
  takeLatest(actionTypes.EDIT_TOPIC, editTopicSaga),
  takeLatest(actionTypes.UPDATE_RESOURCE, updateResourceSaga),
];
export default authSagas;
