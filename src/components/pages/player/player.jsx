import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import VideoPlayer from "../../sections/video-player/video-player";
import {useHistory, useParams} from "react-router-dom";
import {movieItems} from "../../../mocks/movie-items";
import {RoutePath} from "../../constants/routes";

const Player = () => {

  const history = useHistory();
  const {id} = useParams();
  const movie = movieItems.find((item) => item.id === Number(id));
  const {videoLink} = movie;

  return (
    <MainLayout>
      <VideoPlayer src={videoLink} onButtonExitClick={()=> history.push(`${RoutePath.FILMS}${id}`)}/>
    </MainLayout>
  );
};

export default Player;
