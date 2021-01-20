import React from 'react';
import styled from 'styled-components';
import NavItem from './nav-item';
import { createtTopicRoute } from '../utils/helpers';
import colors from '../style/colors';

const NavbarContainer = styled.div`
  border: 1px solid black;
  display: grid;
  width: 10rem;
  height: 100%;
  background-color: ${colors.primary.opaque(0.1)};
`;

const NavbarSection = styled.div`
  color: 
`;

const Navbar = () => {
  const topics = ['all -topics here', 'your- first topic'];
  const mappedTopics = topics.map((topic, index) => (index > 4 ? null : <NavItem to={`/${createtTopicRoute(topic)}`} label={`${topic}`} />));
  // console.log(mappedTopics);
  return (
    <NavbarContainer>
      <NavbarSection>Topics</NavbarSection>
      {mappedTopics}
      {topics.length > 4 ? <NavItem to="/alltopics" label="See all topics" /> : null}
      <NavItem to="/sasaf" label="sasaf" />
    </NavbarContainer>
  );
};
export default Navbar;
