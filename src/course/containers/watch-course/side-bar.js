import React from 'react';
import styled from 'styled-components';
import Section from './watch-course-section';
// import colors from '../../../common/style/colors';

const SideBarContainer = styled.div`
border: 1px solid #DEDFE0;
overflow: scroll;
`;

const SideBar = ({
  sections, setUrl, lastWatched, videoWatchedHandler, listOfWatchedVideos,
}) => {
  let lastVideoNumber = 0;
  const mappedSections = sections && sections.map((section) => {
    lastVideoNumber += section.videos.length;
    return (
      <Section
        listOfWatchedVideos={listOfWatchedVideos}
        lastVideoNumber={lastVideoNumber}
        key={section.order}
        order={section.order}
        title={section.title}
        videos={section.videos}
        setUrl={setUrl}
        lastWatched={lastWatched}
        videoWatchedHandler={videoWatchedHandler}
        totalVideoLength={section.totalVideoLength}
      />
    );
  });
  return (
    <SideBarContainer>
      { mappedSections }
    </SideBarContainer>
  );
};

export default SideBar;
