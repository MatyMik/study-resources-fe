import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import colors from '../../../common/style/colors';
import { ReactComponent as Play } from '../../../assets/play.svg';
import { ReactComponent as CheckMarkIcon } from '../../../assets/check-mark.svg';

const VideoContainer = styled.div`
padding: 0.25rem 0;
display: grid;
grid-template-columns: 1fr 6fr;
    ${(props) => (props.active ? 'background-color: #E6F2F5;' : '')}
&:hover {
  ${(props) => (props.active ? 'background-color: #d4e9ee;' : 'background-color: #F2F3F5;')}

    }
`;
const TitleRow = styled.div`
display: grid;
justify-content: flex-start;
align-items: center;
`;
const Span = styled.span`
    justify-self: flex-start;
`;

const DurationRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr;
  align-items: center;
`;

const Duration = styled.span`
  font-size: 0.75rem;
`;

const PlayButton = styled(Play)`
  height: 0.75rem;
  width: 0.75rem;
  fill: ${(props) => (props.active ? '#007791' : '#8A92A3')}
`;
const CheckBox = styled.div`
    height: 1rem;
    width: 1rem;
    border: 1px solid black;
`;

const CheckMark = styled(CheckMarkIcon)`
  height: 1rem;
  width: 1rem;
  fill: #007791;
`;

const VideoPart = ({
  title, setUrl, url, active, id, videoWatchedHandler, duration, videoNumber,
  increaseNumberOfVideosWatched, decreaseNumberOfVideosWatched, listOfWatchedVideos,
}) => {
  const [watchedMarker, setWatchedMarker] = useState(listOfWatchedVideos.includes(url));
  const selectHandler = () => {
    setUrl(url, videoNumber);
  };
  useEffect(() => {
    if (watchedMarker !== listOfWatchedVideos.includes(url)) {
      setWatchedMarker(listOfWatchedVideos.includes(url));
    }
  }, [listOfWatchedVideos]);
  const changeWatchedStatus = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (watchedMarker) {
      decreaseNumberOfVideosWatched();
    } else {
      increaseNumberOfVideosWatched();
    }
    setWatchedMarker(!watchedMarker);
    videoWatchedHandler(id, !watchedMarker, url);
  };
  return (
    <VideoContainer onClick={selectHandler} active={active}>
      {watchedMarker
        ? <CheckMark onClick={changeWatchedStatus} />
        : <CheckBox onClick={changeWatchedStatus} />}
      <TitleRow>
        <Span>
          {`${videoNumber}. ${title}`}

        </Span>
      </TitleRow>
      <span />
      <DurationRow>
        <PlayButton active={active} />
        <Duration>
          {` ${duration}`}
        </Duration>
      </DurationRow>
    </VideoContainer>

  );
};

export default VideoPart;
