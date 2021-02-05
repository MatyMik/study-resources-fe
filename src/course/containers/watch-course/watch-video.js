import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../../common/style/colors';

const VideoContainer = styled.div`
    width: 90%;
    margin-left:10%;
    ${(props) => (props.active ? `background-color: ${colors.primary.main};` : '')}
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

const VideoPart = ({
  title, order, setUrl, url, active, id, videoWatchedHandler, watched,
}) => {
  const [watchedMarker, setWatchedMarker] = useState(watched);
  const selectHandler = () => {
    setUrl(url, order);
  };

  const stopClickPropagation = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };
  const changeWatchedStatus = () => {
    setWatchedMarker(!watchedMarker);
    videoWatchedHandler(id, !watchedMarker);
  };
  return (
    <VideoContainer onClick={selectHandler} active={active}>
      <TitleRow>
        <Span>
          {order}
          .

        </Span>
        <Span>
          {title}

        </Span>
        {' '}
        <input
          type="checkbox"
          defaultChecked={watched}
          onClick={stopClickPropagation}
          onChange={changeWatchedStatus}
        />
      </TitleRow>
    </VideoContainer>

  );
};

export default VideoPart;
