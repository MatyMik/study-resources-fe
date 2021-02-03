import React from 'react';
import styled from 'styled-components';
import Section from './watch-course-section';
// import colors from '../../../common/style/colors';

const SideBarContainer = styled.div`
    border: 1px solid black;
`;

const SideBar = ({
  sections, setUrl, lastWatched, videoWatchedHandler,
}) => {
  console.log(sections);
  const mappedSections = sections && sections.map((section) => (
    <Section
      key={section.order}
      order={section.order}
      title={section.title}
      videos={section.videos}
      setUrl={setUrl}
      lastWatched={lastWatched}
      videoWatchedHandler={videoWatchedHandler}
    />
  ));
  return (
    <SideBarContainer>
      { mappedSections }
    </SideBarContainer>
  );
};

export default SideBar;
