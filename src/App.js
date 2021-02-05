import React, { useEffect, useState } from 'react';
import {
  withRouter, Switch, Route, useHistory,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { autoLogin } from './auth/store/actions';
import PdfReader from './pdf-reader/pdf-reader';
import PdfUploader from './pdf-reader/pdf-upload';
import Auth from './auth/pages/auth';
import './App.css';
import {
  selectJwtToken, selectIsLoggedIn, selectLoading, selectUserId,
} from './auth/store/selectors';
import Topic from './topics/topic';
import Navbar from './common/navbar/navbar';
import axios, { createResponseInterceptor } from './axios';
import GuardedRoute from './common/hoc/auth-guard';
import ActionsMenu from './common/actions-menu/actions-menu';
import AddEditResource from './topics/pages/add-edit-resource';
import AddTopic from './topics/pages/add-topic';
import AllTopics from './topics/all-topics';
import { loadAllTopics } from './topics/store/actions';
import YoutubePlayer from './youtube-player/youtube-player';
import AddCourse from './course/pages/add-course';
import WatchCourse from './course/pages/watch-course';

let token;
function App() {
  token = useSelector((state) => selectJwtToken(state));
  const isLoggedIn = useSelector((state) => selectIsLoggedIn(state));
  const userId = useSelector((state) => selectUserId(state));
  const loading = useSelector((state) => selectLoading(state));
  const [autoLoginStarted, setAutoLoginStarted] = useState(false);
  const history = useHistory();
  createResponseInterceptor(history);
  const dispatch = useDispatch();
  useEffect(() => {
    setAutoLoginStarted(true);
    if (!isLoggedIn) dispatch(autoLogin(history));
  }, []);
  useEffect(() => {
    if (autoLoginStarted && !isLoggedIn && !loading) history.push('/auth/login');
    else if (userId) dispatch(loadAllTopics(userId));
  }, [loading, userId, isLoggedIn]);

  axios.interceptors.request.use((config) => {
    const authHeader = `token=${token}`;
    config.headers.Authorization = authHeader;
    return config;
  });

  return (
    <>
      {isLoggedIn ? <Navbar /> : null}
      {isLoggedIn ? <ActionsMenu /> : null}
      <Switch>
        <Route path="/auth"><Auth /></Route>
        <GuardedRoute exact path="/alltopics"><AllTopics /></GuardedRoute>
        <GuardedRoute path="/add/resource"><AddEditResource /></GuardedRoute>
        <GuardedRoute path="/add/topic"><AddTopic /></GuardedRoute>
        <GuardedRoute path="/add/course"><AddCourse /></GuardedRoute>
        <GuardedRoute auth={isLoggedIn} path="/resource/book/:pdfId" component={PdfReader} />
        <GuardedRoute auth={isLoggedIn} path="/resource/youtube/:youtubeId" component={YoutubePlayer} />
        <GuardedRoute auth={isLoggedIn} path="/resource/course/:courseId" component={WatchCourse} />
        <GuardedRoute auth={isLoggedIn} path="/:topic" component={Topic} />
        <GuardedRoute auth={isLoggedIn} path="/asdf/asdf" component={PdfUploader} />
        <GuardedRoute auth={isLoggedIn} path="/" component={AllTopics} />
      </Switch>
    </>
  );
}

export default withRouter(App);
