import React, { useState } from 'react';
import styled from 'styled-components';
import Video from './one-video-component';
import colors from '../../common/style/colors';
import { ReactComponent as DownArrow } from '../../assets/down-arrow.svg';

import { ReactComponent as UpArrow } from '../../assets/up-arrow.svg';

const SectionContainer = styled.div`
    width:90%;
    margin: auto;
    border-bottom: 1px solid ${colors.secondary.main};
`;

const Order = styled.span`
    justify-self: center;
`;
const Title = styled.span``;

const TitleRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    color: ${colors.primary.main}
`;

const Details = styled(DownArrow)`
    fill: ${colors.primary.main};
    height: 1rem;
    width: 1rem;
`;

const HideDetails = styled(UpArrow)`
    fill: ${colors.primary.main};
    height: 1rem;
    width: 1rem;
`;

const SectionPart = ({ order, videos, title }) => {
  const [showDetails, setShowDetails] = useState(false);
  const changeShowDetailMode = () => {
    setShowDetails(!showDetails);
  };
  const mappedVideos = videos && videos.map((video) => (
    <Video
      key={video.order}
      title={video.title}
      order={video.order}
    />
  ));
  return (
    <SectionContainer>
      <TitleRow>
        <Order>
          {order}
          .
        </Order>
        <Title>{title}</Title>
        { showDetails
          ? <HideDetails onClick={changeShowDetailMode} />
          : <Details onClick={changeShowDetailMode} />}
      </TitleRow>
      { showDetails ? mappedVideos : null}
    </SectionContainer>
  );
};

export default SectionPart;
