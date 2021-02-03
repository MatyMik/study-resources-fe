import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { selectTopics } from '../../topics/store/selectors';
import Backdrop from './backdrop';
import { editTopic } from '../../topics/store/actions';
import { selectUserId } from '../../auth/store/selectors';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const topics = useSelector((state) => selectTopics(state));
  const userId = useSelector((state) => selectUserId(state));
  const clickHandler = (topicId) => {
    setOpen(false);
    dispatch(editTopic({ lastActive: Date.now(), topicId }, userId));
  };
  const mappedTopics = topics.map((topic, index) => (
    index > (NUMBER_OF_TOPICS_SHOWN_IN_NAVBAR - 1)
      ? null
      : (
        <NavItem
          to={`/${createtTopicRoute(topic.title)}`}
          onClick={clickHandler}
          label={`${topic.title}`}
          key={topic.title}
          topicId={topic.id}
          title={topic.title}
        />
      )));

  return (
    open ? (
      <>
        <NavbarContainer>
          <StyledLeftArrow onClick={() => setOpen(false)} />
          <NavbarSection>Topics</NavbarSection>
          <TopicsContainer numberOfTopics={topics.length}>
            {mappedTopics}
            <NavAllTopicsItem onClick={() => setOpen(false)} to="/alltopics" label="See all topics" />
          </TopicsContainer>

          {topics.length > 4 ? <NavItem to="/alltopics" label="See all topics" /> : null}
          <NavbarSection>Schedule</NavbarSection>
        </NavbarContainer>
        <Backdrop open={open} setOpen={setOpen} />
      </>
    ) : (
      <ClosedNavbarContainer>
        <HamburgerMenu onClick={() => setOpen(true)} />
      </ClosedNavbarContainer>
    )
  );
};
export default Navbar;
