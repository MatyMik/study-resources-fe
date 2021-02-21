import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ActionsMenuContainer, ActionsMenuButton } from './actions-menu-components';

const ActionsMenu = () => {
  const location = useLocation();
  if (location.pathname.includes('/resource/course')) return null;
  const history = useHistory();
  const addResourceHandler = () => {
    history.push('/add/resource');
  };
  const addTopicHandler = () => {
    history.push('/add/topic');
  };
  const addCourseHandler = () => {
    history.push('/add/course');
  };
  return (
    <ActionsMenuContainer>
      <ActionsMenuButton onClick={addTopicHandler}>Add Topic</ActionsMenuButton>
      <ActionsMenuButton onClick={addResourceHandler}>Add Resource</ActionsMenuButton>
      <ActionsMenuButton onClick={addCourseHandler}>Add Course</ActionsMenuButton>
    </ActionsMenuContainer>
  );
};

export default ActionsMenu;
