import React, { useState } from 'react';
import {
  Input,
  AddButton,
  CancelButton,
  AddVideoContainer,
} from '../../components/add-section';

const AddVideoPart = ({ order, addVideo }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const urlHandler = (event) => {
    setUrl(event.target.value);
  };

  const disableButton = !title || !url;
  const addVideoHandler = () => {
    const newVideo = { title, url, order };
    addVideo(newVideo);
    setTitle('');
    setUrl('');
  };
  return (
    <AddVideoContainer>
      {order}
      title:
      <Input value={title} onChange={titleHandler} />
      url:
      <Input value={url} onChange={urlHandler} />
      <AddButton disabled={disableButton} onClick={addVideoHandler}>Add Video</AddButton>
      <CancelButton>Cancel</CancelButton>
    </AddVideoContainer>
  );
};

export default AddVideoPart;
