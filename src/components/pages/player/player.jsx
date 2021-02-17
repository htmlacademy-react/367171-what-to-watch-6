import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import {useParams} from "react-router";
import {movieItems} from "../../../mocks/movie-items";
import {RoutePath} from "../../constants/routes";
import {useHistory} from "react-router-dom";

const Player = () => {

  const history = useHistory();
  const {id} = useParams();
  const movie = movieItems.find((item) => item.id === Number(id));
  const {videoLink} = movie;

  return (
    <MainLayout>
      <div className="player">
        <video src={videoLink} className="player__video" poster="img/player-poster.jpg" autoPlay></video>

        <button type="button" className="player__exit" onClick={()=> history.push(`${RoutePath.FILMS}${id}`)}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Player;
