import React from 'react';
import MainPage from "../pages/main/main";
import PropTypes from "prop-types";
import NotFound from "../pages/not-found/not-found";
import MyList from "../pages/my-list/my-list";
import Player from "../pages/player/player";
import SignIn from "../pages/sign-in/sign-in";
import MoviePage from "../pages/movie-page/movie-page";
import AddReview from "../pages/add-review/add-review";

const App = ({movieItems, genresItems, currentMovie}) => {

  return (
    <AddReview/>
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
