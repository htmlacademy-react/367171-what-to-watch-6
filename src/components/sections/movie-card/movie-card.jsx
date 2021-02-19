import React from 'react';
import PropTypes from 'prop-types';
import MovieCardInfo from "../../blocks/movie-card-info/movie-card-info";
import MovieCardTabContent from "../../blocks/movie-card-tabs/movie-card-tab-content/movie-card-tab-content";
import MovieCardFull from "./movie-card-full/movie-card-full";
import MovieCardShort from "./movie-card-short/movie-card-short";
import MovieCardReview from "./movie-card-review/movie-card-review";

const getMovieCard = (type, currentMovie) => {
  switch (type) {
    case `full`:
      return <MovieCardFull {...currentMovie}/>;
    case `short`:
      return <MovieCardShort {...currentMovie}/>;
    case `review`:
      return <MovieCardReview {...currentMovie}/>;
    default:
      return <MovieCardShort {...currentMovie}/>;
  }
};

const MovieCard = ({type, currentMovie}) => getMovieCard(type, currentMovie);

MovieCard.propTypes = {
  type: PropTypes.string,
  ...MovieCardInfo.propTypes,
  ...MovieCardTabContent.propTypes,
  posterImage: PropTypes.string,
  previewImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  runTime: PropTypes.number,
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  videoLink: PropTypes.string,
  previewVideoLink: PropTypes.string
};

export default MovieCard;
