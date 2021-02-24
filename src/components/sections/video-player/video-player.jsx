import React, {useRef, useEffect, useState} from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({isMuted = false, isPlaying, src, onButtonExitClick, onPlayButtonClick}) => {

  const iconControl = isPlaying ? `#pause` : `#play-s`;
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => setIsLoading(false);

    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (videoRef.current && isPlaying && !isMuted) {
      videoRef.current.play();
      return;
    }
    if (videoRef.current && isPlaying && isMuted) {
      setTimeout(()=> {
        videoRef.current.play();
        return;
      }, 1000);
    }

    videoRef.current.pause();
  }, [videoRef, isPlaying, isMuted]);


  return (
    <div className="player">
      <video
        ref={videoRef}
        src={src}
        className="player__video"
        poster="img/player-poster.jpg"
        autoPlay={isPlaying}
        muted={isMuted}></video>

      <button type="button" className="player__exit" onClick={onButtonExitClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            disabled={isLoading}
            onClick={onPlayButtonClick}>

            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={iconControl}></use>
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
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string,
  isMuted: PropTypes.bool,
  isPlaying: PropTypes.bool,
  onButtonExitClick: PropTypes.func,
  onPlayButtonClick: PropTypes.func
};

export default VideoPlayer;
