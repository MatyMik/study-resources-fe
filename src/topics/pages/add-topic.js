import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  AddResourceContainer,
  ButtonLine,
  EmptyButton,
  FullButton,
  Input,
  InputLabel,
  InputContainer,
  Title,
  ErrorText,
} from '../components/add-edit-resources/add-resources-components';
import { addTopic } from '../store/actions';
import { selectUserId } from '../../auth/store/selectors';
import { selectTopicLoading, selectTopics } from '../store/selectors';

const AddTopic = () => {
  const topics = useSelector((state) => selectTopics(state));
  const topicTitles = topics && topics.map((topic) => topic.title.toLowerCase());
  const loading = useSelector((state) => selectTopicLoading(state));
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => selectUserId(state));
  const [newTopic, setNewTopic] = useState('');
  const [topicAdded, setAdded] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!loading && topicAdded) { history.push('/alltopics'); }
  }, [loading, topicAdded]);

  const handleInput = (event) => {
    setNewTopic(event.target.value);
  };

  const checkIfTopicExists = (newTopic) => {
    topicTitles.includes(newTopic.toLowerCase());
  };

  const handleAdd = () => {
    const topicData = { title: newTopic, userId };
    if (checkIfTopicExists(newTopic)) setError('Topic already ecists');
    else {
      dispatch(addTopic(topicData, userId));
      setAdded(true);
    }
  };
  return (
    <AddResourceContainer>
      <Title>Add a topic</Title>
      <InputContainer>
        <InputLabel>Type the topic name:</InputLabel>
        <Input error={error} onChange={handleInput} />
      </InputContainer>
      {error ? <ErrorText>{error}</ErrorText> : null}
      <ButtonLine>
        <FullButton onClick={handleAdd}>Add Topic</FullButton>
        <EmptyButton>Cancel</EmptyButton>
      </ButtonLine>
    </AddResourceContainer>
  );
};

export default AddTopic;
