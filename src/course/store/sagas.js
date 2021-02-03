import { put } from 'redux-saga/effects';
import axios from '../../axios';
import {
  start, fail, addCourseSuccess, getCoursesSuccess,
  getOneCourseSuccess, updateVideoSuccess, updateCourseSuccess,
} from './actions';

export function* addCourseSaga(action) {
  try {
    yield put(start());
    yield axios.post('/course/add/course', action.courseData);
    yield put(addCourseSuccess());
  } catch (err) {
    yield put(fail(err));
  }
}

export function* getCoursesSaga(action) {
  try {
    yield put(start());
    const response = yield axios.get(`/course/all/${action.topicId}`);
    const { courses } = response.data;
    yield put(getCoursesSuccess(courses));
  } catch (err) {
    yield put(fail(err));
  }
}

export function* getOneCourseSaga(action) {
  try {
    yield put(start());
    const response = yield axios.get(`/course/course/${action.courseId}`);
    const { course } = response.data;
    yield put(getOneCourseSuccess(course));
  } catch (err) {
    yield put(fail(err));
  }
}

export function* updateVideoSaga(action) {
  try {
    yield put(start());
    yield axios.put(`/course/update/video/${action.video.id}`, action.video);
    yield put(updateVideoSuccess());
  } catch (err) {
    yield put(fail(err));
  }
}

export function* updateCourseSaga(action) {
  try {
    yield put(start());
    yield axios.put(`/course/${action.course.id}`, action.course);
    const response = yield axios.get(`/course/course/${action.course.id}`);
    const { course } = response.data;
    yield put(updateCourseSuccess(course));
  } catch (err) {
    yield put(fail(err));
  }
}

export function* updateCourseLastWatchedSaga(action) {
  try {
    yield put(start());
    yield axios.get(`/course/update/lastwatched/${action.courseId}`);
    const response = yield axios.get(`/course/course/${action.courseId}`);
    const { course } = response.data;
    yield put(updateCourseSuccess(course));
  } catch (err) {
    yield put(fail(err));
  }
}
