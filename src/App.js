import React, { useEffect } from 'react';
import {
  withRouter, Switch, Route, useHistory,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { autoLogin } from './auth/store/actions';
// import PdfReader from './pdf-reader/pdf-reader';
import PdfUploader from './pdf-reader/pdf-upload';
import Auth from './auth/pages/auth';
import './App.css';
import { selectJwtToken, selectIsLoggedIn } from './auth/store/selectors';
import Topic from './topics/topic';
import Navbar from './common/navbar/navbar';

import axios from './axios';
import GuardedRoute from './common/hoc/auth-guard';

function App() {
  const token = useSelector((state) => selectJwtToken(state));
  const isLoggedIn = useSelector((state) => selectIsLoggedIn(state));
  const history = useHistory();
  console.log(isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoggedIn) dispatch(autoLogin(history));
  }, []);
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
        <GuardedRoute auth={isLoggedIn} path="/:topic" component={Topic} />
        <GuardedRoute auth={isLoggedIn} path="/asdf/asdf" component={PdfUploader} />
      </Switch>
    </>
  );
}

export default withRouter(App);
