import { useState } from 'react';

const useCourse = (userId) => {
  const [course, setCourse] = useState({ sections: {} });
  const [sections, setSections] = useState([]);
  const [files, setFiles] = useState([]);
  const editCourseTitle = (newTitle) => {
    const currentCourse = { ...course };
    currentCourse.title = newTitle;
    setCourse(currentCourse);
  };

  const clearSectionTitle = (title) => {
    const clearedTitle = /\d+.? ?(.+)[.mp4]?/g.exec(title);
    return clearedTitle[1];
  };
  const clearVideoTitle = (title) => {
    const clearedTitle = /\d+.? ?(.+).mp4/g.exec(title);
    return clearedTitle[1];
  };
  const createDurationInMinutes = (duration) => {
    const minutes = Math.floor((duration + 30) / 60);
    return `${minutes}min`;
  };

  const createDurationInHoursAndMinutes = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutesInSeconds = duration - (hours * 3600);
    const minutes = createDurationInMinutes(minutesInSeconds);
    return `${hours ? `${hours}hr ` : ''}${minutes}`;
  };
  const convertSections = (sections) => {
    const sectionsToReturn = [];
    Object.keys(sections).forEach((section, index) => {
      const videos = sections[section];
      const formattedVideos = videos.map((video, index) => ({
        titleWithNumber: video.title,
        title: clearVideoTitle(video.title),
        order: index,
        url: `${userId}/${video.path}`,
        duration: createDurationInMinutes(video.duration),
      }));
      const totalVideoLength = videos.reduce((acc, video) => acc + video.duration, 0);
      const currentSection = {
        title: clearSectionTitle(section),
        titleWithNumber: section,
        videos: formattedVideos,
        order: index,
        totalVideoLength: createDurationInHoursAndMinutes(totalVideoLength),
      };
      sectionsToReturn.push(currentSection);
    });

    return sectionsToReturn;
  };

  const videoDuration = async (files) => {
    const filteredFiles = files.filter((file) => file.type === 'video/mp4');
    const durationGenerator = filteredFiles.map(async (file) => {
      const vid = document.createElement('video');
      vid.src = URL.createObjectURL(file);
      const promise = new Promise((resolve, reject) => {
        vid.addEventListener('loadedmetadata', () => {
          resolve(parseInt(vid.duration, 10));
        });
        vid.addEventListener('error', () => {
          reject(`${vid.error.message}(${vid.error.code})`);
        });
      });
      file.duration = await promise;
      return file;
    });
    console.log(durationGenerator);
    const filesWithDuration = [];
    for await (const fileWithDuration of durationGenerator) {
      filesWithDuration.push(fileWithDuration);
    }
    console.log(filesWithDuration);
    return filesWithDuration;
  };

  const createFinalFiles = (files) => files.map((file) => {
    const filePath = file.webkitRelativePath.split('/');
    course.title = course.title || filePath[0];
    if (course.sections[filePath[1]]) {
      course.sections[filePath[1]].push({
        title: filePath[2],
        path: file.webkitRelativePath,
        duration: file.duration,
      });
    } else {
      course.sections[filePath[1]] = [{
        title: filePath[2],
        path: file.webkitRelativePath,
        duration: file.duration,
      }];
    }
    return file;
  });

  const createCourseFromUpload = async (files) => {
    const copiedFiles = [...files];
    const filesWithDurations = await videoDuration(copiedFiles);
    const finalFiles = createFinalFiles(filesWithDurations);
    console.log(finalFiles);
    course.totalItems = finalFiles.length;
    const sectionsConverted = convertSections(course.sections);
    setCourse(course);
    setSections(sectionsConverted);
    setFiles(finalFiles);
  };

  const editSectionTitleHandler = (order, newTitle) => {
    sections[order].title = newTitle;
    setSections(sections);
  };
  const sectionMove = (sectionToMoveUp) => {
    const oldSections = [...sections];
    const sectionToMoveUpDetails = { ...oldSections[sectionToMoveUp] };
    const sectionToMoveDown = { ...oldSections[sectionToMoveUp + 1] };
    sectionToMoveUpDetails.order += 1;
    sectionToMoveDown.order -= 1;
    oldSections[sectionToMoveUp] = sectionToMoveDown;
    oldSections[sectionToMoveUp + 1] = sectionToMoveUpDetails;
    setSections(oldSections);
  };

  const reverseSections = () => {
    const oldSections = [...sections];
    oldSections.reverse();
    const sectionsInOrder = oldSections.map((section, index) => {
      section.order = index + 1;
      return section;
    });
    setSections(sectionsInOrder);
  };
  const dragEndHandler = (result) => {
    const { destination, source } = result;
    if (destination.droppableId !== source.droppableId) return null;
    const currentSections = [...sections];
    const selectedSection = currentSections[parseInt(destination.droppableId, 10)];
    const currenctVideoOrder = [...selectedSection.videos];
    const selectedItem = currenctVideoOrder[source.index];
    currenctVideoOrder.splice(source.index, 1);
    currenctVideoOrder.splice(destination.index, 0, selectedItem);
    currentSections[destination.droppableId].videos = currenctVideoOrder;
    setSections(currentSections);
  };
  console.log(sections);
  return {
    files,
    sections,
    course,
    reverseSections,
    sectionMove,
    editSectionTitleHandler,
    createCourseFromUpload,
    dragEndHandler,
    editCourseTitle,
  };
};

export default useCourse;
