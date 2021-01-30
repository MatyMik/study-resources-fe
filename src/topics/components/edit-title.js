import React from 'react';
import {
  EditTitleContainer, EditTitleInput, EditTitleButton, EditTitleCancelButton,
} from './topic-components';

const EditTitleItem = ({
  editHandler, cancelHandler, title, updateTitleInComponentHandler,
}) => (
  <EditTitleContainer>
    <EditTitleInput value={title} onChange={updateTitleInComponentHandler} />
    <EditTitleButton onClick={editHandler}>Edit Title</EditTitleButton>
    <EditTitleCancelButton onClick={cancelHandler}>Cancel</EditTitleCancelButton>
  </EditTitleContainer>
);

export default EditTitleItem;
