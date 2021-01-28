import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUserId } from '../auth/store/selectors';
import { selectTopics } from './store/selectors';
import { loadAllTopics } from './store/actions';
import { AllTopicsContainer, TopicItemContainer, TopicsContainer } from './components/all-topics-components';
import { createtTopicRoute } from '../common/utils/helpers';

const AllTopics = () => {
  const topics = useSelector((state) => selectTopics(state));
  const userId = useSelector((state) => selectUserId(state));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadAllTopics(userId));
  }, []);

  const clickHandler = (topicTitle, topicId) => {
    const topic = createtTopicRoute(topicTitle);
    history.push({ pathname: `/${topic}`, props: topicId });
  };

  const topicsToRender = topics.map((topic) => (
    <TopicItemContainer key={topic.title} onClick={() => clickHandler(topic.title, topic.id)}>
      {topic.title}
    </TopicItemContainer>
  ));
  return (
    <AllTopicsContainer>
      <TopicsContainer>
        {topicsToRender}
      </TopicsContainer>
    </AllTopicsContainer>
  );
};

export default AllTopics;
