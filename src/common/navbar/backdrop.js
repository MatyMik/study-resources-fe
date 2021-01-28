import React from 'react';
import styled from 'styled-components';

const BackdropItem = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    top:0;
    ${(props) => (props.open ? null : 'display: none;')}
`;

const Backdrop = ({ setOpen, open }) => {
  const clickHandler = () => {
    setOpen(!open);
  };
  return (
    <BackdropItem open={open} onClick={clickHandler} />
  );
};

export default Backdrop;
