import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    border: 1px solid black;
`;

const ListItemsInTopic = () => {
  useEffect(() => console.log('Rendered'));
  return (
    <Container />
  );
};

export default ListItemsInTopic;
