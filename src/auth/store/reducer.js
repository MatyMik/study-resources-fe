import * as actionTypes from './action-types';

const initialState = {
  loading: false,
  isLoggedIn: false,
  error: null,
  token: null,
};

const reducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case actionTypes.FORGOT_PASSWORD_START:
    case actionTypes.SIGNUP_START:
    case actionTypes.LOGIN_START:
    case actionTypes.RESET_PASSWORD_START:
      return { ...state, loading: true, error: null };
    case actionTypes.FORGOT_PASSWORD_FAIL:
    case actionTypes.RESET_PASSWORD_FAIL:
    case actionTypes.LOGIN_FAIL:
    case actionTypes.SIGNUP_FAIL:
      return { ...state, loading: false, error: action.error };
    case actionTypes.SIGNUP_SUCCESS:
    case actionTypes.RESET_PASSWORD_SUCCESS:
    case actionTypes.FORGOT_PASSWORD_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
        isLoggedIn: true,
      };
    case actionTypes.REFRESH_TOKEN_START:
      return state;
    default:
      return state;
  }
};

export default reducer;
