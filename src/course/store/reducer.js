import * as actionTypes from './action-types';

const initialState = {
  loading: false,
  error: null,
  courses: [],
  chosenCourse: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START:
      return { ...state, loading: true, error: null };
    case actionTypes.FAIL:
      return { ...state, loading: false, error: action.error };
    case actionTypes.GET_ONE_COURSE_SUCCESS:
    case actionTypes.UPDATE_COURSE_SUCCESS:
    case actionTypes.UPDATE_COURSE_LAST_WATCHED_SUCCESS:
    case actionTypes.SET_CURRENT_COURSE:
    case actionTypes.ADD_SECTION_TO_COURSE_SUCCESS:
      return { ...state, loading: false, chosenCourse: action.course };
    case actionTypes.UPDATE_VIDEO_SUCCESS:
    case actionTypes.UPDATE_VIDEO_BY_URL_SUCCESS:
    default:
      return state;
  }
};

export default reducer;
