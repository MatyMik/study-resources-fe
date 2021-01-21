import React from 'react';
import Progressbar from './progressbar';
import { ItemContainer, ItemTitle } from './topic-components';
import Actions from './actions';

const TopicItemProgress = ({ title }) => (
  <ItemContainer>
    <ItemTitle>
      {title}
    </ItemTitle>
    <Progressbar percent={75} />
    <Actions />
  </ItemContainer>
);

export default TopicItemProgress;
