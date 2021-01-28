import React from 'react';
import {
  FileInputLabel, FileInput, BookIcon, InputLabel,
} from './add-resources-components';

const FileInputItem = ({ file, onChange, uploadLabel }) => (
  <>
    <InputLabel>
      Choose a file:
    </InputLabel>
    <FileInputLabel htmlFor="upload-pdf">
      <BookIcon />
      {uploadLabel || 'Choose file from list ...'}
    </FileInputLabel>
    <FileInput type="file" id="upload-pdf" file={file} onChange={onChange} />
  </>
);

export default FileInputItem;
