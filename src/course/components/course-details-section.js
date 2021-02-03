import React, { useState } from 'react';
import styled from 'styled-components';
import Section from './one-section-component';
import AddSection from '../containers/add-section-container/add-section-container';
import { ButtonFullRow, AddButton, CancelButton } from './add-section';

const CourseDetailContainer = styled.div`
    width: 92.5%;
    margin: auto;
`;

const AddedSectionsContainer = styled.div`
  margin-top: 2rem;
`;

const NewSectionDiv = styled.div``;

const CourseDetailsComponent = ({ addCourseHandler, disableAdd, setTotalItems }) => {
  const [currentSection, setCurrentSection] = useState({});
  const [addSectionMode, setAddSectionMode] = useState(false);
  const [videoNumber, setVideoNumber] = useState(1);
  const [sectionNumber, setSectionNumber] = useState(1);
  const switchAddSectionMode = () => {
    setAddSectionMode(!addSectionMode);
  };
  const [sections, setSections] = useState([]);
  const addSectionHandler = (newSection, lastVideoNumber) => {
    const currentSections = [...sections];
    currentSections.push(newSection);
    setSections(currentSections);
    setVideoNumber(lastVideoNumber + 1);
    setSectionNumber(sectionNumber + 1);
    setTotalItems(lastVideoNumber);
  };

  const addCourseButtonHandler = () => {
    addCourseHandler(sections);
  };
  const mappedSections = sections.map((section) => (
    <Section
      key={section.order}
      order={section.order}
      videos={section.videos}
      title={section.title}
    />
  ));

  const disableButton = disableAdd || sections.length === 0;
  return (
    <CourseDetailContainer>

      { addSectionMode
        ? (
          <AddSection
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            addSectionHandler={addSectionHandler}
            videoNumber={videoNumber}
            sectionNumber={sectionNumber}
          />
        )
        : (
          <NewSectionDiv onClick={switchAddSectionMode}>
            Add New Section
          </NewSectionDiv>
        )}
      <AddedSectionsContainer>
        {mappedSections}
      </AddedSectionsContainer>
      <ButtonFullRow>
        <AddButton disabled={disableButton} onClick={addCourseButtonHandler}>Add Course</AddButton>
        <CancelButton>Cancel</CancelButton>
      </ButtonFullRow>
    </CourseDetailContainer>
  );
};

export default CourseDetailsComponent;
