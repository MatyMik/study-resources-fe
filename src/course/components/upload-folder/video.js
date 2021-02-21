import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import {
  VideoContainer, EditContainer, Title, ClosedHand, OpenHand, DragContainer,
} from './copmonents';

const Video = ({
  title, order, dropIndex, titleWithNumber, showClearedTitle,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [editMode, setEditMode] = useState(false);
  const titleHandler = (event) => {
    setNewTitle(event.target.value);
  };
  const changeEditMode = () => {
    setEditMode(!editMode);
  };
  return (
    <Draggable draggableId={title} index={dropIndex}>
      {(provided, snapshot) => (
        <VideoContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <DragContainer
            {...provided.dragHandleProps}
          >
            {snapshot.isDragging ? <ClosedHand />
              : <OpenHand />}
          </DragContainer>
          {order}
          {editMode ? (
            <EditContainer>
              <input value={newTitle} onChange={titleHandler} />
              <button type="button" onClick={changeEditMode}>Rename</button>
            </EditContainer>
          )
            : (
              <Title onClick={changeEditMode}>
                {showClearedTitle ? newTitle : titleWithNumber}
              </Title>
            )}
        </VideoContainer>
      )}
    </Draggable>
  );
};

export default Video;
