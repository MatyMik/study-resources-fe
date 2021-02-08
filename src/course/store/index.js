import { takeLatest } from 'redux-saga/effects';
import {
  addCourseSaga,
  getCoursesSaga,
  getOneCourseSaga,
  updateCourseSaga,
  updateVideoSaga,
  updateCourseLastWatchedSaga,
  addSectionToCourseSaga,
} from './sagas';
import * as actionTypes from './action-types';

const courseSagas = [
  takeLatest(actionTypes.ADD_COURSE, addCourseSaga),
  takeLatest(actionTypes.GET_COURSES, getCoursesSaga),
  takeLatest(actionTypes.GET_ONE_COURSE, getOneCourseSaga),
  takeLatest(actionTypes.UPDATE_COURSE, updateCourseSaga),
  takeLatest(actionTypes.UPDATE_VIDEO, updateVideoSaga),
  takeLatest(actionTypes.UPDATE_COURSE_LAST_WATCHED, updateCourseLastWatchedSaga),
  takeLatest(actionTypes.ADD_SECTION_TO_COURSE, addSectionToCourseSaga),
];
export default courseSagas;
