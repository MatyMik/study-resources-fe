import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Udemy } from '../../../assets/udemy.svg';

const UdemyLogo = styled(Udemy)`
  height: 32px;
  width: 112px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr 6.8fr 2fr;
  background-color: #29303B;
  height: 3.5rem;
  align-items: center;
  padding: 0 1rem;
`;

const LogoItem = styled.div`

`;
const Line = styled.div`
  border-left: 1px solid #686F7A;
  height: 40%;
`;

const Title = styled.div`
  color: white;
`;

const Topic = styled.div`
color: white;
`;

const TopRow = ({ topic, title }) => (
  <Container>
    <LogoItem><UdemyLogo /></LogoItem>
    <Line />
    <Title>
      {title}
    </Title>
    <Topic>
      {topic}
    </Topic>
  </Container>
);

export default TopRow;
