import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { selectTopics, selectTopicLoading } from '../../topics/store/selectors';
import { selectCurrentCourse } from '../store/selector';
import {
  AddCourseContainer, TitleInputContainer, TitleInput,
} from '../components/add-course-components';
import TopicSelector from '../../topics/components/add-edit-resources/topic-selector';
import CourseDetailsComponent from '../components/course-details-section';
import { addSectionToCourse, getOneCourse } from '../store/actions';
import { createtTopicRoute } from '../../common/utils/helpers';

const EditCourse = () => {
  const params = useParams();
  const { courseId } = params;
  const topics = useSelector((state) => selectTopics(state));
  const courseToEdit = useSelector((state) => selectCurrentCourse(state));
  const [topicId, setTopicId] = useState(courseToEdit && courseToEdit.topicId);
  const topicTitle = topics.filter((t) => t.id === courseToEdit.topicId);
  const [title, setTitle] = useState(courseToEdit && courseToEdit.title);
  const [selectedTopic, setSelectedTopic] = useState(topicTitle
    && topicTitle[0]
    && topicTitle[0].title);
  const [totalItems, setTotalItems] = useState(courseToEdit && courseToEdit.totalItems);
  const [courseUpdated, setCourseUpdated] = useState(false);
  const history = useHistory();
  const loading = useSelector((state) => selectTopicLoading(state));

  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  };
  useEffect(() => {
    if (!loading && courseUpdated) history.push({ pathname: `/${createtTopicRoute(selectedTopic)}`, topicProps: { topicId, topic: selectedTopic } });
  }, [loading, courseUpdated]);

  useEffect(() => {
    dispatch(getOneCourse(courseId));
  }, []);
  const dispatch = useDispatch();
  const updateCourseHandler = (sections) => {
    const updatedCourse = {
      id: courseId,
      title,
      sections,
      topicId,
      totalItems,
    };
    dispatch(addSectionToCourse(updatedCourse));
    setCourseUpdated(true);
  };

  return (
    <AddCourseContainer>
      <TitleInputContainer>
        <TitleInput value={title} onChange={titleInputHandler} />
      </TitleInputContainer>
      <TopicSelector
        topics={topics}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        topicId={topicId}
        setTopicId={setTopicId}
      />
      <CourseDetailsComponent
        disableAdd={!title}
        addCourseHandler={updateCourseHandler}
        setTotalItems={setTotalItems}
        course={courseToEdit}
      />

    </AddCourseContainer>
  );
};

export default EditCourse;
