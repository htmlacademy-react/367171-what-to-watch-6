import React from "react";
import PropTypes from "prop-types";

const getMovieRatingText = (rating) => {
  switch (true) {
    case rating <= 3:
      return `Bad`;
    case (rating > 3 && rating <= 5):
      return `Normal`;
    case (rating > 5 && rating <= 8):
      return `Good`;
    case (rating > 8 && rating < 10):
      return `Very good`;
    case (rating === 10):
      return `Awesome`;
    default:
      return `Empty data`;
  }
};

const MovieCardRating = ({rating, scoresCount}) => {

  const ratingMovie = rating.toString().replace(/\./g, `,`);

  return (
    <div className="movie-rating">
      <div className="movie-rating__score">{ratingMovie}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getMovieRatingText(rating)}</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>
  );
};

MovieCardRating.propTypes = {
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
};

export default MovieCardRating;
