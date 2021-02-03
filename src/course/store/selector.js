import { createSelector } from 'reselect';

export const selectCourses = (state) => state.course;

export const selectCurrentCourse = createSelector(
  selectCourses,
  (course) => course.chosenCourse,
);

export const selectLoading = createSelector(
  selectCourses,
  (course) => course.loading,
);
