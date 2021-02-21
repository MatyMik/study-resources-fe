import React, { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import {
  Section, Title, Input, DownArrow, UpArrow, Button, EditContainer, VideosContainer, Row,
} from './copmonents';
import Video from './video';

const SectionPart = ({
  title,
  order,
  editTitleHandler,
  sectionMove,
  videos,
  itemsSoFar,
  showClearedTitle,
  titleWithNumber,
}) => {
  const [editTitleMode, setEditTitleMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  useEffect(() => {
    if (!newTitle && title) setNewTitle(title);
  }, [title]);
  const editTitle = (event) => {
    setNewTitle(event.target.value);
  };
  const changeEditMode = () => {
    setEditTitleMode(!editTitleMode);
    console.log(order);
  };
  const renameHandler = () => {
    editTitleHandler(order, newTitle);
    changeEditMode();
  };

  const moveSectionUp = () => {
    sectionMove(order - 1);
  };
  const moveSectionDown = () => {
    sectionMove(order);
  };

  const mappedVideos = videos && videos.map((video, index) => (
    <Video
      key={`${title}${video.title}`}
      title={video.title}
      order={itemsSoFar + index + 1}
      titleWithNumber={video.titleWithNumber}
      dropIndex={index}
      showClearedTitle={showClearedTitle}
    />
  ));
  return (
    <Section>
      <Row>
        <DownArrow onClick={moveSectionDown} />
        <UpArrow onClick={moveSectionUp} />
        {editTitleMode ? (
          <EditContainer>
            <Input value={newTitle} onChange={editTitle} />
            <Button onClick={renameHandler}>Rename</Button>
          </EditContainer>
        )
          : <Title onClick={changeEditMode}>{showClearedTitle ? newTitle : titleWithNumber}</Title>}
      </Row>
      <Droppable droppableId={order.toString()}>
        {(provided) => (
          <VideosContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {mappedVideos}
            {provided.placeholder}
          </VideosContainer>
        )}
      </Droppable>
    </Section>
  );
};

export default SectionPart;
