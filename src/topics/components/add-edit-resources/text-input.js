import React from 'react';
import { InputContainer, InputLabel, Input } from './add-resources-components';

const TextInputItem = ({
  setItem, label, placeholder, title,
}) => {
  const InputHandler = (event) => {
    setItem(event.target.value);
  };
  return (
    <InputContainer>

      <InputLabel htmlFor={`${label}`}>{label}</InputLabel>
      <Input placeholder={placeholder} type="text" onChange={InputHandler} name={`${label}`} value={title} />

    </InputContainer>
  );
};

export default TextInputItem;
