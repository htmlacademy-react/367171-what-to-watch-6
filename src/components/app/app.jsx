import React from 'react';
import MainPage from "../pages/main/main";
import PropTypes from "prop-types";
import NotFound from "../pages/not-found/not-found";
import MyList from "../pages/my-list/my-list";
import Player from "../pages/player/player";

const App = ({movieItems, genresItems, currentMovie}) => {

  return (
    <Player/>
    // <MainPage genresItems={genresItems} movieItems={movieItems} currentMovie={currentMovie}/>
  );
};

App.propTypes = {
  movieItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired,
  genresItems: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
  ).isRequired,
  title: PropTypes.string,
  img: PropTypes.string,
  currentMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    isActive: PropTypes.boolean
  })
};

export default App;
