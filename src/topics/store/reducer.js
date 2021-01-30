import * as actionTypes from './action-types';

const initialState = {
  loading: false,
  error: null,
  article: [],
  book: [],
  youtube: [],
  udemy: [],
  topics: [],
  archivedarticle: [],
  archivedbook: [],
  archivedyoutube: [],
  archivedudemy: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_RESOURCE_START:
    case actionTypes.LOAD_ALL_TOPICS_START:
    case actionTypes.ADD_TOPIC_START:
    case actionTypes.DELETE_TOPIC_START:
    case actionTypes.ADD_RESOURCE_START:
    case actionTypes.EDIT_TOPIC_START:
      return { ...state, loading: true, error: null };
    case actionTypes.LOAD_RESOURCE_SUCCESS:
      return { ...state, loading: false, [action.resourceType]: action.resources };
    case actionTypes.LOAD_RESOURCE_FAIL:
    case actionTypes.LOAD_ALL_TOPICS_FAIL:
    case actionTypes.ADD_TOPIC_FAIL:
    case actionTypes.DELETE_TOPIC_FAIL:
    case actionTypes.ADD_RESOURCE_FAIL:
    case actionTypes.EDIT_TOPIC_FAIL:
      return { ...state, loading: false, error: action.error };
    case actionTypes.ADD_TOPIC_SUCCESS:
    case actionTypes.LOAD_ALL_TOPICS_SUCCESS:
    case actionTypes.DELETE_TOPIC_SUCCESS:
    case actionTypes.EDIT_TOPIC_SUCCESS:
      return { ...state, loading: false, topics: action.topics };
    case actionTypes.ADD_RESOURCE_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
