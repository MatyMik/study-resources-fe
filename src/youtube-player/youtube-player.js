import React from 'react';
import ReactPlayer from 'react-player';

const YoutubePlayer = (props) => {
  const url = props
    && props.location
    && props.location.state
    && props.location.state.youtubeProps
    && props.location.state.youtubeProps.url;
  console.log(props.location.state);
  return (
    <ReactPlayer url={url} onDuration={(duration) => console.log(duration)} />
  );
};

export default YoutubePlayer;
