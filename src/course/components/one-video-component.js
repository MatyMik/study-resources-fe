import React from 'react';
import styled from 'styled-components';
import colors from '../../common/style/colors';

const VideoContainer = styled.div`
    width: 90%;
    margin: auto;
    border-bottom: 1px solid ${colors.secondary.main};
    margin:0.5rem auto;
`;

const Title = styled.span``;
const Order = styled.span``;

const Video = ({ order, title }) => (
  <VideoContainer>
    <Order>{order}</Order>
    <Title>{title}</Title>
  </VideoContainer>
);

export default Video;
