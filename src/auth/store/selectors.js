import { createSelector } from 'reselect';

export const selectAuth = (state) => state.auth;
const errorSelector = (auth, type) => {
  const error = auth.error
  && auth.error.length > 0 ? auth.error.filter((error) => error.field === type) : [];
  return error.length > 0 ? error[0].message : null;
};

export const selectLoading = createSelector(
  selectAuth,
  (auth) => auth.loading,
);

export const selectEmailError = createSelector(
  selectAuth,
  (auth) => errorSelector(auth, 'email'),
);

export const selectPasswordError = createSelector(
  selectAuth,
  (auth) => errorSelector(auth, 'password'),
);

export const selectConfirmPasswordError = createSelector(
  selectAuth,
  (auth) => errorSelector(auth, 'confirmPassword'),
);

export const selectUserId = createSelector(
  selectAuth,
  (auth) => auth.userId,
);

export const selectJwtToken = createSelector(
  selectAuth,
  (auth) => auth.token,
);

export const selectIsLoggedIn = createSelector(
  selectAuth,
  (auth) => auth.isLoggedIn,
);
