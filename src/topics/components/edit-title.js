import React from 'react';
import {
  EditTitleContainer, EditTitleInput, EditTitleButton, EditTitleCancelButton,
} from './topic-components';

const EditTitleItem = ({
  editHandler, cancelHandler, title, setTitle,
}) => (
  <EditTitleContainer>
    <EditTitleInput value={title} onChange={setTitle} />
    <EditTitleButton onClick={editHandler}>Edit Title</EditTitleButton>
    <EditTitleCancelButton onClick={cancelHandler}>Cancel</EditTitleCancelButton>
  </EditTitleContainer>
);

export default EditTitleItem;
