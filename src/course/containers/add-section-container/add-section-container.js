import React, { useState } from 'react';
import Video from '../../components/one-video-component';
import { AddIcon } from '../../../topics/components/topic-components';

import {
  AddSectionContainer, Title, Input,
  LabeLContainer, SectionTitleEditContainer, InputRow,
  AddButton, ButtonRow,
  VideoListContainer,
  CancelButton,
  ButtonFullRow,
  AddVideoPlaceholder,
} from '../../components/add-section';
import AddVideoPart from './add-video-container';

const AddSection = ({
  videoNumber, sectionNumber, addSectionHandler,
}) => {
  const defaultTitle = 'No Title';
  const [sectionTitleEditMode, setSectionTitleEditMode] = useState(true);
  const changeSectionTitleEditmode = () => {
    setSectionTitleEditMode(!sectionTitleEditMode);
  };
  const cancelSectionTitleEdit = () => {
    setSectionTitleEditMode(!sectionTitleEditMode);
    setSectionTitle(sectionTitleBeforeEdit);
  };
  const sectionTitleEditDone = () => {
    setSectionTitleEditMode(false);
    setSectionTitleBeforeEdit(sectionTitle);
  };

  const [videos, setVideos] = useState([]);
  const [videoOrder, setVideoOrder] = useState(videoNumber);

  const addVideoHandler = (newVideo) => {
    const currentVideos = [...videos];
    currentVideos.push(newVideo);
    setVideos(currentVideos);
    setVideoOrder(videoOrder + 1);
    setAddVideoMode(false);
  };

  const [addVideoMode, setAddVideoMode] = useState(false);
  const changeAddVideoMode = () => {
    setAddVideoMode(!addVideoMode);
  };

  const [sectionTitle, setSectionTitle] = useState(defaultTitle);
  const [sectionTitleBeforeEdit, setSectionTitleBeforeEdit] = useState(defaultTitle);
  const sectionTitleHandler = (event) => {
    setSectionTitle(event.target.value);
  };

  const addSectionButtonHandler = () => {
    const newSection = { title: sectionTitle, order: sectionNumber, videos };
    addSectionHandler(newSection, videoOrder - 1);
    setSectionTitle(defaultTitle);
    setSectionTitleBeforeEdit(defaultTitle);
    setVideos([]);
  };

  const cancelAddSection = () => {
    setSectionTitle(defaultTitle);
    setVideos([]);
  };
  const mappedVideos = videos && videos.map((video) => (
    <Video
      key={video.order}
      title={video.title}
      order={video.order}
    />
  ));
  const disableAddButton = (sectionTitle === defaultTitle) || (!sectionTitle);
  return (
    <AddSectionContainer>
      {sectionNumber}
      { sectionTitleEditMode ? (
        <SectionTitleEditContainer>
          <LabeLContainer>Section Title:</LabeLContainer>
          <InputRow>
            <Input value={sectionTitle} onChange={sectionTitleHandler} />
            <ButtonRow>
              <AddButton disabled={disableAddButton} onClick={sectionTitleEditDone}>Set</AddButton>
              <CancelButton onClick={cancelSectionTitleEdit}>Cancel</CancelButton>
            </ButtonRow>
          </InputRow>
        </SectionTitleEditContainer>
      ) : <Title onClick={changeSectionTitleEditmode}>{sectionTitle}</Title>}
      <VideoListContainer>
        {mappedVideos}
        { addVideoMode
          ? (
            <AddVideoPart addVideo={addVideoHandler} order={videoOrder} />

          ) : (
            <AddVideoPlaceholder onClick={changeAddVideoMode}>
              <AddIcon />
              Add new video
            </AddVideoPlaceholder>
          )}
      </VideoListContainer>
      <ButtonFullRow>
        <AddButton onClick={addSectionButtonHandler}>Add Section</AddButton>
        <CancelButton onClick={cancelAddSection}>Cancel</CancelButton>
      </ButtonFullRow>
    </AddSectionContainer>
  );
};

export default AddSection;
