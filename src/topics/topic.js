import React from 'react';
import { useParams } from 'react-router';
import { Container, ListContainer } from './components/topic-components';
import TopicItemWithProgress from './components/topic-item-with-progress';
import Pagination from './pagination/pagination';
import ResourceTypeSelector from './components/resource-type-selector';

const Topic = () => {
  const params = useParams();
  const { topic } = params;

  console.log(topic);

  const firstPageHandler = () => {
    console.log(topic);
  };
  return (
    <Container>
      <ResourceTypeSelector topic={topic} />
      <ListContainer>
        <TopicItemWithProgress title="this" />
        <TopicItemWithProgress title="this" />
        <TopicItemWithProgress title="this" />
        <TopicItemWithProgress title="this" />
      </ListContainer>
      <Pagination totalItems={200} page={1} itemsPerPage={5} firstPageHandler={firstPageHandler} />
    </Container>
  );
};

export default Topic;
