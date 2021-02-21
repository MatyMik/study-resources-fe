import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactJWPlayer from 'react-jw-player';
import { useParams } from 'react-router';
import classes from './watch-course.css';
import {
  getOneCourse,
  updateVideo,
  updateVideoByUrl,
  // updateCourseLastWatched,
} from '../store/actions';
import { selectCurrentCourse } from '../store/selector';
import SideBar from '../containers/watch-course/side-bar';
import { WatchCourseContainer, WatchCourseMain } from '../containers/watch-course/watch-course-components';
import TopRow from '../containers/watch-course/top-row';
import { selectTopics } from '../../topics/store/selectors';

const WatchCourse = () => {
  const params = useParams();
  const topics = useSelector((state) => selectTopics(state));
  const [topic, setTopic] = useState('');
  const { courseId } = params;
  const dispatch = useDispatch();
  const course = useSelector((state) => selectCurrentCourse(state));
  const [url, setUrl] = useState('');
  const [lastWatched, setLastWatched] = useState(course && course.lastWatched);
  const urlList = course && course.nextUrls;
  const defaultPlaybackSpeed = localStorage.getItem('playbackSpeed');
  const [playbackSpeed, setPlaybackSpeed] = useState(defaultPlaybackSpeed || 1);

  const [listOfWatchedVideos, setListOfWatchedVideos] = useState([]);
  const setVideoData = (url) => {
    setUrl(url);
    setLastWatched(url);
  };

  useEffect(() => {
    dispatch(getOneCourse(courseId));
  }, []);
  useEffect(() => {

  }, [url]);
  useEffect(() => {
    if (course && course.topicId && !topic) {
      console.log(course);
      const [topic] = topics.filter((topic) => topic.id === course.topicId);
      setTopic(topic.title);
      setListOfWatchedVideos(course.watchedVideos);
    }
  }, [course]);
  const videoWatchedHandler = (videoId, watched, url) => {
    const video = { id: videoId, watched };
    // dispatch(updateCourseLastWatched(courseId));
    dispatch(updateVideo(video));
    const videosWatched = [...listOfWatchedVideos];
    if (watched) {
      videosWatched.push(url);
      setListOfWatchedVideos(videosWatched);
    } else {
      const newVideosWatched = videosWatched.filter((video) => video !== url);
      setListOfWatchedVideos(newVideosWatched);
    }
  };

  const onVideoWatched = () => {
    const videosWatched = [...listOfWatchedVideos];
    videosWatched.push(url);
    setListOfWatchedVideos(videosWatched);
    dispatch(updateVideoByUrl(url));
  };

  const onVideoEnd = () => {
    setLastWatched(urlList[url]);
    setUrl(urlList[url]);
  };

  const clickVideoHandler = (e) => {
    if (e.target.type === 'button') {
      const text = e.target.innerHTML;
      const textLength = text.length;
      const playbackSpeed = text.slice(0, textLength - 1);
      setPlaybackSpeed(playbackSpeed);
      localStorage.setItem('playbackSpeed', playbackSpeed);
    }
  };
  const onVideoLoad = () => {
    const JWPlayer = document.querySelector('#my-unique-id');
    JWPlayer.addEventListener('click', clickVideoHandler);
  };

  const setDefaultPlaybackSpeed = () => {
    const player = document.querySelector('video');
    console.log(playbackSpeed);
    if (player) player.defaultPlaybackRate = playbackSpeed;
  };
  return (
    <>

      <TopRow title={course && course.title} topicId={course && course.topicId} topic={topic} />
      <WatchCourseContainer>
        <WatchCourseMain>
          <ReactJWPlayer
            customProps={{ playbackRateControls: [0.75, 1, 1.25, 1.5, 2] }}
            className={classes.player}
            playerId="my-unique-id"
            playerScript={process.env.REACT_APP_JWPLAYER_SCRIPT}
            file={`https://${process.env.REACT_APP_DO_BUCKET_NAME}.${process.env.REACT_APP_DO_STORAGE_SPACE}/${url}`}
            isAutoPlay
            onNinetyFivePercent={onVideoWatched}
            onOneHundredPercent={onVideoEnd}
            onReady={setDefaultPlaybackSpeed}
            onVideoLoad={onVideoLoad}
          />
        </WatchCourseMain>
        <SideBar
          sections={course && course.sections}
          listOfWatchedVideos={listOfWatchedVideos}
          setUrl={setVideoData}
          lastWatched={lastWatched}
          videoWatchedHandler={videoWatchedHandler}
        />

        ,
      </WatchCourseContainer>
    </>
  );
};

export default WatchCourse;
