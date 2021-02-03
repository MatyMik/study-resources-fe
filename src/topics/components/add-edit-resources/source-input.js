import React from 'react';
import { Input, InputLabel, InputContainer } from './add-resources-components';
import FileInput from './file-input';

const SourceSelector = ({
  resourceType, setSource, source, handleFileSelection, fileName,
}) => {
  const label = resourceType === 'book' ? 'Choose a file:' : 'Insert a link:';
  const inputType = resourceType === 'book' ? 'file' : 'text';
  const sourceHandler = (event) => {
    if (resourceType === 'book') {
      setSource(event.target.files[0]);
      handleFileSelection(event);
    }
    setSource(event.target.value);
  };
  return (
    <InputContainer>
      {resourceType !== 'book' ? (
        <>
          <InputLabel>{label}</InputLabel>
          <Input type={inputType} onChange={sourceHandler} value={source} />
        </>
      ) : <FileInput onChange={sourceHandler} file={source} uploadLabel={fileName} />}
    </InputContainer>
  );
};

export default SourceSelector;
