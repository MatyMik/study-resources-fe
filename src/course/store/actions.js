import * as actionTypes from './action-types';

export const start = () => ({ type: actionTypes.START });
export const fail = () => ({ type: actionTypes.FAIL });

export const addCourseSuccess = () => ({ type: actionTypes.ADD_COURSE_SUCCESS });
export const addCourse = (courseData) => ({ type: actionTypes.ADD_COURSE, courseData });

export const getCoursesSuccess = (courses) => ({ type: actionTypes.GET_COURSES_SUCCESS, courses });
export const getCourses = (topicId) => ({ type: actionTypes.GET_COURSES, topicId });

export const getOneCourseSuccess = (course) => ({
  type: actionTypes.GET_ONE_COURSE_SUCCESS,
  course,
});
export const getOneCourse = (courseId) => ({ type: actionTypes.GET_ONE_COURSE, courseId });

export const updateVideo = (video) => ({ type: actionTypes.UPDATE_VIDEO, video });
export const updateVideoSuccess = () => ({ type: actionTypes.UPDATE_VIDEO_SUCCESS });

export const updateCourse = (video) => ({ type: actionTypes.UPDATE_COURSE, video });
export const updateCourseSuccess = (course) => ({
  type: actionTypes.UPDATE_COURSE_SUCCESS,
  course,
});

export const updateCourseLastWatched = (courseId) => ({
  type: actionTypes.UPDATE_COURSE_LAST_WATCHED,
  courseId,
});
export const updateCourseLastWatchedSuccess = (course) => ({
  type: actionTypes.UPDATE_COURSE_LAST_WATCHED_SUCCESS,
  course,
});

export const setCurrentCourse = (course) => ({ type: actionTypes.SET_CURRENT_COURSE, course });

export const addSectionToCourse = (course) => ({ type: actionTypes.ADD_SECTION_TO_COURSE, course });
export const addSectionToCourseSuccess = (course) => ({
  type: actionTypes.ADD_SECTION_TO_COURSE_SUCCESS,
  course,
});
