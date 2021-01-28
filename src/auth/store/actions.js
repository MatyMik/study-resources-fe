import * as actionTypes from './action-types';

export const signupStart = () => ({ type: actionTypes.SIGNUP_START });
export const signupFail = (error) => ({ type: actionTypes.SIGNUP_FAIL, error });
export const signupSuccess = () => ({ type: actionTypes.SIGNUP_SUCCESS });
export const signup = (authData, history) => ({ type: actionTypes.SIGNUP, authData, history });

export const loginStart = () => ({ type: actionTypes.LOGIN_START });
export const loginFail = (error) => ({ type: actionTypes.LOGIN_FAIL, error });
export const loginSuccess = (token, userId) => ({ type: actionTypes.LOGIN_SUCCESS, token, userId });
export const login = (authData, history) => ({ type: actionTypes.LOGIN, authData, history });

export const resetPasswordStart = () => ({ type: actionTypes.RESET_PASSWORD_START });
export const resetPasswordFail = (error) => ({ type: actionTypes.RESET_PASSWORD_FAIL, error });
export const resetPasswordSuccess = () => ({ type: actionTypes.RESET_PASSWORD_SUCCESS });
export const resetPassword = (authData, history) => ({
  type: actionTypes.RESET_PASSWORD,
  authData,
  history,
});

export const forgotPasswordStart = () => ({ type: actionTypes.FORGOT_PASSWORD_START });
export const forgotPasswordFail = (error) => ({ type: actionTypes.FORGOT_PASSWORD_FAIL, error });
export const forgotPasswordSuccess = () => ({ type: actionTypes.FORGOT_PASSWORD_SUCCESS });
export const forgotPassword = (authData, history) => ({
  type: actionTypes.FORGOT_PASSWORD,
  authData,
  history,
});

export const autoLogin = (history) => ({ type: actionTypes.AUTO_LOGIN, history });

export const refreshToken = () => ({ type: actionTypes.REFRESH_TOKEN });
export const refreshTokenSuccess = (token, history) => ({
  type: actionTypes.REFRESH_TOKEN_SUCCESS,
  token,
  history,
});
export const refreshTokenStart = () => ({ type: actionTypes.REFRESH_TOKEN_START });
