import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { selectTopics } from '../store/selectors';

const AddTopic = () => {
  const topics = useSelector((state) => selectTopics(state));
  const topicTitles = topics && topics.map((topic) => topic.title.toLowerCase());
  const dispatch = useDispatch();
  const userId = useSelector((state) => selectUserId(state));
  const [newTopic, setNewTopic] = useState('');
  const [error, setError] = useState('');

  const handleInput = (event) => {
    setNewTopic(event.target.value);
  };

  const checkIfTopicExists = (newTopic) => {
    topicTitles.includes(newTopic.toLowerCase());
  };

  const handleAdd = () => {
    const topicData = { title: newTopic, userId };
    if (checkIfTopicExists(newTopic)) setError('Topic already ecists');
    else dispatch(addTopic(topicData, userId));
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
