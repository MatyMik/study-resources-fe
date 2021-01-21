import React, { useEffect, useState } from 'react';
import {
  withRouter, Switch, Route, useHistory,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { autoLogin } from './auth/store/actions';
// import PdfReader from './pdf-reader/pdf-reader';
import PdfUploader from './pdf-reader/pdf-upload';
import Auth from './auth/pages/auth';
import './App.css';
import { selectJwtToken, selectIsLoggedIn, selectLoading } from './auth/store/selectors';
import Topic from './topics/topic';
import Navbar from './common/navbar/navbar';

import axios from './axios';
import GuardedRoute from './common/hoc/auth-guard';

function App() {
  const token = useSelector((state) => selectJwtToken(state));
  const isLoggedIn = useSelector((state) => selectIsLoggedIn(state));
  const loading = useSelector((state) => selectLoading(state));
  const [autoLoginStarted, setAutoLoginStarted] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    setAutoLoginStarted(true);
    if (!isLoggedIn) dispatch(autoLogin(history));
  }, []);
  useEffect(() => {
    console.log(loading);
    if (autoLoginStarted && !isLoggedIn && !loading) history.push('/auth/login');
  }, [loading]);
  axios.interceptors.request.use((config) => {
    const authHeader = `token=${token}`;
    config.headers.Authorization = authHeader;
    return config;
  });
  return (
    <>
      {isLoggedIn ? <Navbar /> : null}
      <Switch>
        <Route path="/auth"><Auth /></Route>
        <GuardedRoute auth={isLoggedIn} path="/" component={Topic} />
        <GuardedRoute auth={isLoggedIn} path="/:topic" component={Topic} />
        <GuardedRoute auth={isLoggedIn} path="/asdf/asdf" component={PdfUploader} />
      </Switch>
    </>
  );
}

export default withRouter(App);
