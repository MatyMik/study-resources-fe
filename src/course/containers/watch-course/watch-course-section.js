import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import colors from '../../../common/style/colors';
import Video from './watch-video';

const VideoContainer = styled.div`

`;
const TitleRow = styled.div`
display: grid;
padding: 0 1rem;
align-items: center;
font-weight: bold;
`;
const Span = styled.span`
    justify-self: flex-start;
`;

const Separator = styled.span`
border-left: 1px solid #686F7A;
display: inline-block;
height: 0.625rem;
margin: 0 0.375rem;
`;
const SectionHeader = styled.div`
  padding: 1rem 0;
  background-color: #F7F8FA;
  border-bottom: 1px solid #DEDFE0;

  &:hover {
    background-color: #F2F3F5;
  }
`;
const VideoInfo = styled.div`
padding: 0 1rem;
font-weight: normal;
font-size: 12px;

`;

const Section = ({
  title, order, videos, setUrl, listOfWatchedVideos,
  lastWatched, videoWatchedHandler, totalVideoLength, lastVideoNumber,
}) => {
  const [open, setOpen] = useState(false);
  const [numberOfVideosWatched, setNumberOfVideosWatched] = useState(null);
  useEffect(() => {
    const watchedVideos = videos
      && videos.reduce((acc, video) => acc + listOfWatchedVideos.includes(video.url), 0);
    if (watchedVideos !== numberOfVideosWatched) {
      setNumberOfVideosWatched(watchedVideos);
    }
  }, [videos, listOfWatchedVideos]);
  const increaseNumberOfVideosWatched = () => {
    setNumberOfVideosWatched(numberOfVideosWatched + 1);
  };
  const decreaseNumberOfVideosWatched = () => {
    setNumberOfVideosWatched(numberOfVideosWatched - 1);
  };
  useEffect(() => {
    const [currentVideo] = videos.filter((video) => video.url === lastWatched);
    if (currentVideo) setOpen(true);
  }, [lastWatched]);
  const changeOpen = () => {
    setOpen(!open);
  };
  let videoNumber = lastVideoNumber - (videos && videos.length);
  const numberOfVideos = videos && videos.length;

  const videosMapped = videos && videos.map((video) => {
    videoNumber += 1;
    return (
      <Video
        listOfWatchedVideos={listOfWatchedVideos}
        key={video.order}
        order={video.order}
        setUrl={setUrl}
        title={video.title}
        url={video.url}
        active={lastWatched === video.url}
        id={video.id}
        watched={video.watched}
        videoWatchedHandler={videoWatchedHandler}
        duration={video.duration}
        videoNumber={videoNumber}
        increaseNumberOfVideosWatched={increaseNumberOfVideosWatched}
        decreaseNumberOfVideosWatched={decreaseNumberOfVideosWatched}
      />
    );
  });
  return (
    <VideoContainer>
      <SectionHeader>
        <TitleRow onClick={changeOpen}>
          <Span>
            Section
            {` ${order}: ${title}`}

          </Span>
        </TitleRow>
        <VideoInfo>
          {`${numberOfVideosWatched} / ${numberOfVideos}`}
          <Separator />
          {totalVideoLength}
        </VideoInfo>
      </SectionHeader>
      { open ? videosMapped : null }
    </VideoContainer>
  );
};

export default Section;
