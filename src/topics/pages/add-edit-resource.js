import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as pdfJs from 'pdfjs-dist';
import { selectTopics } from '../store/selectors';
import {
  AddResourceContainer, Title, ButtonLine, EmptyButton, FullButton,
} from '../components/add-edit-resources/add-resources-components';
import ResourceTypeSelector from '../components/add-edit-resources/add-resource-type-selector';
import SourceSelector from '../components/add-edit-resources/source-input';
import TopicSelector from '../components/add-edit-resources/topic-selector';
import TextInput from '../components/add-edit-resources/text-input';
import { addResource } from '../store/actions';
import { uploadPdf } from '../../pdf-reader/store/actions';
import { selectUserId } from '../../auth/store/selectors';

pdfJs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfJs.version}/pdf.worker.js`;

const AddResource = () => {
  const [numPages, setNumpages] = useState(0);
  const [fileToUpload, setFileToUpload] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileSelection = (event) => {
    const [file] = event.target.files;
    setFileToUpload(file);
    const fr = new FileReader();

    fr.onload = () => {
      pdfJs.getDocument(fr.result).promise.then((doc) => setNumpages(doc.numPages));
    };
    fr.readAsDataURL(file);

    setTitle(file.name);
    setFileName(file.name);
  };

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const topics = useSelector((state) => selectTopics(state));
  const userId = useSelector((state) => selectUserId(state));
  const query = useQuery();
  const topic = query.get('topic') || (topics.length > 0 && topics[0].title) || '';
  const titleText = 'Create Resource';
  const dispatch = useDispatch();
  const [resourceType, setResourceType] = useState('book');
  const [selectedTopic, setSelectedTopic] = useState(topic);
  const [topicId, setTopicId] = useState(0);
  const [source, setSource] = useState('');
  const [title, setTitle] = useState('');

  const addHandler = () => {
    const pdfDetails = {
      numPages,
      title,
      topicId,
      type: 'pdf',
      url: `${userId}/${title}`,
    };
    const addData = {
      title, type: resourceType, topicId, url: source,
    };
    if (resourceType === 'book') dispatch(uploadPdf(pdfDetails, fileToUpload, userId));
    else dispatch(addResource(addData));
  };
  return (
    <AddResourceContainer>
      <Title>{titleText}</Title>
      <ResourceTypeSelector resourceType={resourceType} setResourceType={setResourceType} />
      <SourceSelector
        resourceType={resourceType}
        source={source}
        setSource={setSource}
        handleFileSelection={handleFileSelection}
        fileName={fileName}
      />
      <TopicSelector
        topics={topics}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        topicId={topicId}
        setTopicId={setTopicId}
      />
      <TextInput placeholder="Type the name here" label="Choose Name" setItem={setTitle} title={title} />
      <ButtonLine>
        <FullButton onClick={addHandler}>Create</FullButton>
        <EmptyButton>Cancel</EmptyButton>
      </ButtonLine>
    </AddResourceContainer>
  );
};

export default AddResource;
