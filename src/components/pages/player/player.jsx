import React, {useState} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import VideoPlayer from "../../sections/video-player/video-player";
import {useHistory} from "react-router-dom";
import useMovie from "../../hooks/use-movie";

const Player = () => {
  const history = useHistory();

  const currentMovie = useMovie();
  const {videoLink} = currentMovie;
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <MainLayout>
      <VideoPlayer
        src={videoLink}
        isPlaying={isPlaying}
        onPlayButtonClick={() => setIsPlaying(!isPlaying)}
        onButtonExitClick={()=> history.goBack()}/>
    </MainLayout>
  );
};

export default Player;
