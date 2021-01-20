import React, { useState } from 'react';
import {
  NavbarContainer,
  NavbarSection,
  TopicsContainer,
  StyledLeftArrow,
  HamburgerMenu,
  ClosedNavbarContainer,
} from './navbar-copmonents';
import NavItem from './nav-item';
import { createtTopicRoute } from '../utils/helpers';
import { NUMBER_OF_TOPICS_SHOWN_IN_NAVBAR } from '../utils/constants';
import NavAllTopicsItem from './navbar-all-topics-item';

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const topics = ['all -topics here', 'your- first topic'];
  const mappedTopics = topics.map((topic, index) => (index > (NUMBER_OF_TOPICS_SHOWN_IN_NAVBAR - 1) ? null : <NavItem to={`/${createtTopicRoute(topic)}`} label={`${topic}`} key={topic} />));
  // console.log(mappedTopics);
  return (
    open ? (
      <NavbarContainer>
        <StyledLeftArrow onClick={() => setOpen(false)} />
        <NavbarSection>Topics</NavbarSection>
        <TopicsContainer numberOfTopics={topics.length}>
          {mappedTopics}
          <NavAllTopicsItem to="/alltopics" label="See all topics" />
        </TopicsContainer>

        {topics.length > 4 ? <NavItem to="/alltopics" label="See all topics" /> : null}
        <NavbarSection>Schedule</NavbarSection>
      </NavbarContainer>
    ) : (
      <ClosedNavbarContainer>
        <HamburgerMenu onClick={() => setOpen(true)} />
      </ClosedNavbarContainer>
    )
  );
};
export default Navbar;
