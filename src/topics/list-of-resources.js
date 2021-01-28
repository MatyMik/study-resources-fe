import React from 'react';
import { useHistory } from 'react-router';
import { ListContainer, AddResourceItem, AddIcon } from './components/topic-components';
import TopicItemWithProgress from './components/topic-item-with-progress';

const ListOfResources = ({
  resourceType, topic, resources,
}) => {
  const history = useHistory();

  const addResourceHandler = () => {
    history.push(`/add/resource?topic=${topic}`);
  };

  const resourcesToRender = resources && resources.map((resource) => (
    <TopicItemWithProgress
      resourceType={resourceType}
      title={resource.title}
      key={resource.id}
      url={resource.url}
      hasProgressbar={resourceType === 'book'}
    />

  ));
  return (
    <ListContainer>
      {resourcesToRender}
      <AddResourceItem onClick={addResourceHandler}>
        <AddIcon />
        Add
        {' '}
        {resourceType}
      </AddResourceItem>
    </ListContainer>
  );
};

export default ListOfResources;
