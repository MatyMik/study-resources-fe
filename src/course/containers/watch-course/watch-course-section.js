import React, { useState } from 'react';
import styled from 'styled-components';
// import colors from '../../../common/style/colors';
import Video from './watch-video';

const VideoContainer = styled.div`
border-bottom: 1px solid black;

`;
const TitleRow = styled.div`
border-bottom: 1px solid black;
display: grid;
grid-template-columns: 1fr 6fr;
justify-content: center;
align-items: center;
`;
const Span = styled.span`
    justify-self: flex-start;
`;

const Section = ({
  title, order, videos, setUrl, lastWatched, videoWatchedHandler,
}) => {
  const [open, setOpen] = useState(false);
  const changeOpen = () => {
    setOpen(!open);
  };
  const videosMapped = videos && videos.map((video) => (
    <Video
      key={video.order}
      order={video.order}
      setUrl={setUrl}
      title={video.title}
      url={video.url}
      active={lastWatched === video.order}
      id={video.id}
      watched={video.watched}
      videoWatchedHandler={videoWatchedHandler}
    />
  ));
  return (
    <VideoContainer>
      <TitleRow onClick={changeOpen}>
        <Span>
          {order}
          .
        </Span>
        <Span>{title}</Span>

      </TitleRow>
      { open ? videosMapped : null }
    </VideoContainer>
  );
};

export default Section;
