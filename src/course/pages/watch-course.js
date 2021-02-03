import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  getOneCourse,
  updateVideo,
  updateCourseLastWatched,
} from '../store/actions';
import { selectCurrentCourse } from '../store/selector';
import SideBar from '../containers/watch-course/side-bar';
import { WatchCourseContainer, WatchCourseMain } from '../containers/watch-course/watch-course-components';

const WatchCourse = () => {
  const params = useParams();
  const { courseId } = params;
  const dispatch = useDispatch();
  const course = useSelector((state) => selectCurrentCourse(state));
  const [url, setUrl] = useState('');
  // const [selectedVideoId, setSelectedVideoId] = useState(0);
  const [lastWatched, setLastWatched] = useState(course && course.lastWatched);
  const setVideoData = (url, order) => {
    setUrl(url);
    setLastWatched(order);
  };

  useEffect(() => {
    dispatch(getOneCourse(courseId));
  }, []);
  const videoWatchedHandler = (videoId, watched) => {
    const video = { id: videoId, watched };
    dispatch(updateCourseLastWatched(courseId));
    dispatch(updateVideo(video));
  };

  return (
    <WatchCourseContainer>
      <WatchCourseMain>
        <iframe title="episode 2" src={`${url}`} width="100%" height="640" />
      </WatchCourseMain>
      <SideBar
        sections={course && course.sections}
        setUrl={setVideoData}
        lastWatched={lastWatched}
        videoWatchedHandler={videoWatchedHandler}
      />

    </WatchCourseContainer>
  );
};

export default WatchCourse;
