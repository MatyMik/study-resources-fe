import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  width:90%;
  margin: 5rem auto;
  border: 1px solid black;
`;

const ListContainer = styled.div`
  display: grid;
  border: 1px solid black;
`;

const Topic = () => {
  const params = useParams();
  const { topic } = params;
  console.log(topic);
  return (
    <Container>
      <ListContainer>
        Lists
        { topic }
      </ListContainer>
    </Container>
  );
};

export default Topic;
