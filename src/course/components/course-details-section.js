import React, { useEffect, useState } from 'react';
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

const CourseDetailsComponent = ({
  addCourseHandler, disableAdd, setTotalItems, course,
}) => {
  const [currentSection, setCurrentSection] = useState({});
  const [addSectionMode, setAddSectionMode] = useState(false);
  const [videoNumber, setVideoNumber] = useState((course && course.totalItems) || 1);
  const [sections, setSections] = useState((course && course.sections) || []);
  const [newSections, setNewSections] = useState([]);
  const [sectionNumber, setSectionNumber] = useState(sections.length + 1);
  const [sectionsInitialized, setSectionsInitialized] = useState(false);
  const switchAddSectionMode = () => {
    setAddSectionMode(!addSectionMode);
  };
  useEffect(() => {
    if (course && course.sections && course.sections.length > 0 && !sectionsInitialized) {
      setSections(course.sections);
      setSectionNumber(course.sections.length + 1);
      setVideoNumber(course.totalItems + 1);
      setTotalItems(course.totalItems);
      setSectionsInitialized(true);
      setAddSectionMode(true);
    }
  }, [course]);

  const addSectionHandler = (newSection, lastVideoNumber) => {
    const currentSections = [...newSections];
    const allSections = [...sections];
    allSections.push(newSection);
    currentSections.push(newSection);
    setNewSections(currentSections);
    setSections(allSections);
    setVideoNumber(lastVideoNumber + 1);
    setSectionNumber(sectionNumber + 1);
    setTotalItems(lastVideoNumber);
  };

  const addCourseButtonHandler = () => {
    addCourseHandler(newSections);
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
