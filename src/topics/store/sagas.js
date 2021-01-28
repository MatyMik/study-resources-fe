import { put } from 'redux-saga/effects';
import axios from '../../axios';
import {
  loadResourceStart, loadResourceFail, loadResourceSuccess,
  addTopicStart, addTopicSuccess, addTopicFail,
  loadAllTopicsStart, loadAllTopicsSuccess, loadAllTopicsFail,
  deleteTopicFail, deleteTopicSuccess, deleteTopicStart,
  addResourceStart, addResourceFail, addResourceSuccess,
  editTopicSuccess, editTopicFail, editTopicStart,
} from './actions';

export function* loadResourceSaga(action) {
  try {
    yield put(loadResourceStart());
    const response = yield axios.get(`/${action.resourceType}/all/${action.topicId}`, { params: { page: action.page, itemsPerPage: action.itemsPerPage } });
    const { resources } = response.data;
    yield put(loadResourceSuccess(action.resourceType, resources));
  } catch (err) {
    yield put(loadResourceFail(err));
  }
}

export function* addTopicSaga(action) {
  try {
    yield put(addTopicStart());
    yield axios.post('/topics/add', action.topic);
    const response = yield axios.get(`/topics/all/${action.userId}`);
    const { topics } = response.data;
    yield put(addTopicSuccess(topics));
  } catch (err) {
    yield put(addTopicFail(err));
  }
}

export function* loadAllTopicsSaga(action) {
  try {
    yield put(loadAllTopicsStart());
    const response = yield axios.get(`/topics/all/${action.userId}`);
    const { topics } = response.data;
    console.log(topics);
    yield put(loadAllTopicsSuccess(topics));
  } catch (err) {
    yield put(loadAllTopicsFail(err));
  }
}

export function* deleteTopicSaga(action) {
  try {
    yield put(deleteTopicStart());
    yield axios.delete(`/topics/${action.topicId}`);
    const response = yield axios.get(`/topics/all/${action.userId}`);
    const { topics } = response.data;
    yield put(deleteTopicSuccess(topics));
  } catch (err) {
    yield put(deleteTopicFail(err));
  }
}

export function* addResourceSaga(action) {
  try {
    yield put(addResourceStart());
    console.log(action);
    yield axios.post(`/${action.resourceData.type}/add`, { articleDetails: action.resourceData });
    yield put(addResourceSuccess());
  } catch (err) {
    yield put(addResourceFail(err));
  }
}

export function* editTopicSaga(action) {
  try {
    yield put(editTopicStart());
    yield axios.put('/topics/update', action.topicData);
    const response = yield axios.get(`/topics/all/${action.userId}`);
    const { topics } = response.data;
    yield put(editTopicSuccess(topics));
  } catch (err) {
    yield put(editTopicFail(err));
  }
}
