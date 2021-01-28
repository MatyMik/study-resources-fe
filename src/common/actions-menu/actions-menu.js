import React from 'react';
import { useHistory } from 'react-router-dom';
import { ActionsMenuContainer, ActionsMenuButton } from './actions-menu-components';

const ActionsMenu = () => {
  const history = useHistory();
  const addResourceHandler = () => {
    history.push('/add/resource');
  };
  const addTopicHandler = () => {
    history.push('/add/topic');
  };
  return (
    <ActionsMenuContainer>
      <ActionsMenuButton onClick={addTopicHandler}>Add Topic</ActionsMenuButton>
      <ActionsMenuButton onClick={addResourceHandler}>Add Resource</ActionsMenuButton>
    </ActionsMenuContainer>
  );
};

export default ActionsMenu;
