import React, { useState } from 'react';
import {
  Input,
  AddButton,
  CancelButton,
  AddVideoContainer,
} from '../../components/add-section';
import GooglePicker from './google-drive';

const AddVideoPart = ({ order, addVideo }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [duration, setDuration] = useState(0);
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const urlHandler = (event) => {
    setUrl(event.target.value);
  };

  const disableButton = !title || !url;
  const addVideoHandler = () => {
    const newVideo = {
      title, url, order, duration,
    };
    addVideo(newVideo);
    setTitle('');
    setUrl('');
    setDuration(0);
  };
  return (
    <AddVideoContainer>
      {order}
      <GooglePicker setUrl={setUrl} setTitle={setTitle} setDuration={setDuration} />
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
