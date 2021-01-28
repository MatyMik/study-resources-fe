import React from 'react';
import { useHistory } from 'react-router-dom';
import Progressbar from './progressbar';
import { ItemContainer, ItemTitle } from './topic-components';
import Actions from './actions';

const TopicItemProgress = ({
  title, hasProgreessbar, resourceType, resourceId, url,
}) => {
  const history = useHistory();
  const handleItemOpen = () => {
    switch (resourceType) {
      case ('article'):
      case ('book'): {
        history.push(`/resource/${resourceType}/${resourceId}`);
        break;
      }
      case ('youtube'): {
        window.open(url, '_blank');
        break;
      }
      default:
        break;
    }
  };
  return (
    <ItemContainer hasProgreessbar={hasProgreessbar}>
      <ItemTitle onClick={handleItemOpen}>
        {title}
      </ItemTitle>
      {hasProgreessbar ? <Progressbar percent={75} /> : null}
      <Actions />
    </ItemContainer>
  );
};

export default TopicItemProgress;
