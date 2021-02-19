import React from "react";
import PropTypes from "prop-types";
import MovieCardRating from "../../movie-card-rating/movie-card-rating";

const getStringFromArray = (array, sign) => {
  return array.join(`${sign} `);
};

const MovieCardTabContent = ({rating, scoresCount, description, director, starring})=> {
  return (
    <>
      <MovieCardRating rating={rating} scoresCount={scoresCount}/>
      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {getStringFromArray(starring, `,`)}</strong></p>
      </div>
    </>
  );
};

MovieCardTabContent.propTypes = {
  ...MovieCardRating.propTypes,
  description: PropTypes.string,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
};

export default MovieCardTabContent;
