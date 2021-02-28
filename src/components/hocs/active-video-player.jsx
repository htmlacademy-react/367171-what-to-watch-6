import React, {useState, useRef} from 'react';
import MovieCardPreview from "../blocks/movies-list/movie-card-preview/movie-card-preview";
import VideoPlayer from "../sections/video-player/video-player";
import {RoutePath} from "../constants/routes";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

const ActiveVideoPlayer = ({videoLink, id, name, previewImage}) => {

  const history = useHistory();
  const [isHovering, setHovering] = useState(false);
  const previewRef = useRef();

  const onMouseUp = () => setHovering(false);

  const onMouseDown = ()=> {
    if (Number(previewRef.current.id) === id) {
      setHovering(true);
    }
  };

  return (
    <>
      {isHovering ?
        <VideoPlayer
          onMouseUp={onMouseUp}
          id={id}
          src={videoLink}
          isMuted={true}
          isPlaying={Number(previewRef.current.id) === id ? true : false}
          onFullScreenButtonClick={()=> history.push(`${RoutePath.PLAYER}${id}`)}/> :
        <MovieCardPreview
          onMouseDown={onMouseDown}
          ref={previewRef}
          id={id}
          key={id}
          name={name}
          previewImage={previewImage}/>}
    </>
  );
};

ActiveVideoPlayer.propTypes = {
  id: PropTypes.number,
  videoLink: PropTypes.string,
  name: PropTypes.string,
  previewImage: PropTypes.string,
};

export default ActiveVideoPlayer;
