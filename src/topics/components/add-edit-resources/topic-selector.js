import React, { useEffect } from 'react';
import { InputContainer, TopicSelector, InputLabel } from './add-resources-components';

const TopicSelectorItem = ({
  topics, selectedTopic, setSelectedTopic, setTopicId,
}) => {
  const [topic] = topics && topics.filter((topic) => topic.title === selectedTopic);

  const topicId = topic && topic.id;
  console.log(topicId);
  useEffect(() => {
    setTopicId(topicId);
  }, [topicId]);
  const optionsMapped = topics.map((topic) => (
    <option
      key={topic.title}
      selected={selectedTopic === topic.title}
    >
      {topic.title}
    </option>
  ));
  const selectorHandler = (event) => {
    setSelectedTopic(event.target.value);
  };
  return (
    <InputContainer>
      <InputLabel>Choose a topic:</InputLabel>
      <TopicSelector onChange={selectorHandler}>
        {optionsMapped}
      </TopicSelector>
    </InputContainer>
  );
};

export default TopicSelectorItem;
