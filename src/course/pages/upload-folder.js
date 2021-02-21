import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import {
  Container, TitleContainer, EditContainer, Title,
} from '../components/upload-folder/copmonents';
import Section from '../components/upload-folder/section';
import { selectUserId } from '../../auth/store/selectors';
import useFileHandlers from '../hooks/upload-files';
import useCourse from '../hooks/create-course';
import TopicSelector from '../../topics/components/add-edit-resources/topic-selector';
import { selectTopics } from '../../topics/store/selectors';

const UploadCourse = () => {
  const { upload, uploaded } = useFileHandlers();
  const [editMode, setEditMode] = useState(false);
  const [showClearedTitle, setShowClearedTitle] = useState(false);
  const topics = useSelector((state) => selectTopics(state));
  const [topicId, setTopicId] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(topics && topics[0] && topics[0].title);
  const userId = useSelector((state) => selectUserId(state));
  const {
    files,
    sections,
    dragEndHandler,
    course,
    reverseSections,
    sectionMove,
    editSectionTitleHandler,
    createCourseFromUpload,
    editCourseTitle,
  } = useCourse(userId);
  useEffect(() => {
    if (!topicId && topics.length > 0) {
      setTopicId(topics[0].id);
    }
  }, [topicId, topics]);
  const titleHandler = (event) => {
    editCourseTitle(event.target.value);
  };
  const changeEditMode = () => {
    setEditMode(!editMode);
  };
  let itemsSoFar = 0;
  const sectionsMapped = sections && sections.map((section, index) => {
    itemsSoFar += index === 0 ? 0 : sections[index - 1].videos.length;
    return (
      <Section
        itemsSoFar={itemsSoFar}
        key={section.title}
        title={section.title}
        editTitleHandler={editSectionTitleHandler}
        order={index}
        sectionMove={sectionMove}
        maxSections={sections.length}
        videos={section.videos}
        titleWithNumber={section.titleWithNumber}
        showClearedTitle={showClearedTitle}
      />
    );
  });

  const fileUploadHandler = (event) => {
    createCourseFromUpload(event.target.files);
  };

  const addCourse = async () => {
    course.sections = sections;
    course.topicId = topicId;
    upload({
      files, userId, course, sections,
    });
  };
  const toggleShowClearedTitle = () => {
    setShowClearedTitle(!showClearedTitle);
  };

  const uploadedSection = uploaded && uploaded.map((uploadedfile) => (
    <div key={`${uploadedfile.key}`}>{uploadedfile.title}</div>));
  return (
    <Container>
      <input directory="" webkitdirectory="" type="file" onChange={fileUploadHandler} />
      <button onClick={reverseSections} type="button">Reverse</button>
      <button onClick={addCourse} type="button">Add Course</button>
      <button type="button" onClick={toggleShowClearedTitle}>
        {showClearedTitle ? 'Show video number' : 'Hide video number'}
      </button>
      <TitleContainer>
        {editMode ? (
          <EditContainer>
            <input value={course.title} onChange={titleHandler} />
            <button type="button" onClick={changeEditMode}>Rename</button>
          </EditContainer>
        )
          : (
            <Title onClick={changeEditMode}>
              {course.title}
            </Title>
          )}

      </TitleContainer>
      <TopicSelector
        topics={topics}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        topicId={topicId}
        setTopicId={setTopicId}
      />
      <DragDropContext
        onDragEnd={dragEndHandler}
      >
        {sectionsMapped}
      </DragDropContext>
      {uploadedSection}
    </Container>
  );
};

export default UploadCourse;
