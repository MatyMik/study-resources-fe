import React, { memo } from 'react';
import { useLocation, useHistory } from 'react-router';

import { useDispatch } from 'react-redux';
import AuthLayout from '../auth-layout';
import {
  signup, login, resetPassword, forgotPassword,
} from '../store/actions';

const Auth = memo(() => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const page = /signup$/.test(location.pathname) ? 'signup' : /login$/.test(location.pathname) ? 'login' : /resetpassword$/.test(location.pathname) ? 'resetpassword' : /forgotpassword$/.test(location.pathname) ? 'forgotpassword' : null;
  console.log(page);
  const redirectPage = location.pathname.includes('login') ? '/signup' : '/login';
  const redirectHandler = () => {
    history.push(redirectPage);
  };
  const passwordRedirectHandler = () => {
    history.push('forgotpassword');
  };

  // if (!page) history.push('/login');
  const actionFunction = () => {
    if (page === 'signup') return signup;
    if (page === 'login') return login;
    if (page === 'resetpassword') return resetPassword;
    return forgotPassword;
  };
  const sendHandler = (authData) => {
    const handlerFunction = actionFunction();
    dispatch(handlerFunction(authData, history));
  };

  return (
    <AuthLayout
      page={page}
      buttonHandler={sendHandler}
      redirectHandler={redirectHandler}
      passwordRedirectHandler={passwordRedirectHandler}
    />
  );
});

export default Auth;
