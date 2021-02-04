import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { selectTopics, selectTopicLoading } from '../../topics/store/selectors';
import {
  AddCourseContainer, TitleInputContainer, TitleInput,
} from '../components/add-course-components';
import TopicSelector from '../../topics/components/add-edit-resources/topic-selector';
import CourseDetailsComponent from '../components/course-details-section';
import { addCourse } from '../store/actions';
import { createtTopicRoute } from '../../common/utils/helpers';

const AddCourse = () => {
  const topics = useSelector((state) => selectTopics(state));
  const [topicId, setTopicId] = useState(0);
  const [title, setTitle] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(topics && topics[0] && topics[0].title);
  const [totalItems, setTotalItems] = useState(0);
  const [courseAdded, setCourseAdded] = useState(false);
  const history = useHistory();
  const loading = useSelector((state) => selectTopicLoading(state));

  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  };
  console.log(selectedTopic);
  useEffect(() => {
    console.log(selectedTopic);
    if (!loading && courseAdded) history.push({ pathname: `/${createtTopicRoute(selectedTopic)}`, topicProps: { topicId, topic: selectedTopic } });
  }, [loading, courseAdded]);

  useEffect(() => {
    if (!topicId && topics.length > 0) {
      setTopicId(topics[0].id);
    }
  }, [topicId, topics]);
  const dispatch = useDispatch();
  const addCourseHandler = (sections) => {
    const newCourse = {
      title, sections, topicId, totalItems,
    };
    console.log(newCourse);
    dispatch(addCourse(newCourse));
    setCourseAdded(true);
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
        addCourseHandler={addCourseHandler}
        setTotalItems={setTotalItems}
      />

    </AddCourseContainer>
  );
};

export default AddCourse;
