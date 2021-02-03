import { put } from 'redux-saga/effects';
import axios from '../../axios';
import {
  loadResourceStart, loadResourceFail, loadResourceSuccess,
  addTopicStart, addTopicSuccess, addTopicFail,
  loadAllTopicsStart, loadAllTopicsSuccess, loadAllTopicsFail,
  deleteTopicFail, deleteTopicSuccess, deleteTopicStart,
  addResourceStart, addResourceFail, addResourceSuccess,
  editTopicSuccess, editTopicFail, editTopicStart,
  updateResourceFail, updateResourceSuccess, updateResourceStart,
  deleteResourceFail, deleteResourceSuccess, deleteResourceStart,
} from './actions';

export function* loadResourceSaga(action) {
  try {
    let { resourceType } = action;
    yield put(loadResourceStart());
    const response = yield axios.get(`/${action.resourceType}/all/${action.topicId}`, { params: { page: action.page, itemsPerPage: action.itemsPerPage, archived: action.archived } });
    const { resources, count } = response.data;
    if (action.archived) {
      resourceType = `archived${action.resourceType}`;
    }
    yield put(loadResourceSuccess(resourceType, resources, count));
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
    yield axios.post(`/${action.resourceData.type}/add`, { resourceData: action.resourceData });
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

export function* updateResourceSaga(action) {
  try {
    yield put(updateResourceStart());
    const response = yield axios.put(`/${action.resourceType}/update/${action.resource.id}`, action.resource);
    const { resources } = response.data;
    yield put(updateResourceSuccess(action.resourceType, resources));
  } catch (err) {
    yield put(updateResourceFail(err));
  }
}

export function* deleteResourceSaga(action) {
  try {
    yield put(deleteResourceStart());
    const response = yield axios.delete(`/${action.resourceType}/delete/${action.resource.id}`);
    const { resources } = response.data;
    yield put(deleteResourceSuccess(action.resourceType, resources));
  } catch (err) {
    yield put(deleteResourceFail(err));
  }
}
