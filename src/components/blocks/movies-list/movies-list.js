import React from "react";
import MovieCardPreview from "../movie-card-preview/movie-card-preview";
import PropTypes from "prop-types";

const MoviesList = ({movieItems}) => {
  return (
    <div className="catalog__movies-list">
      {movieItems.map(({id, name, previewImage}) => (
        <MovieCardPreview key={id} name={name} previewImage={previewImage}/>
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movieItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        previewImage: PropTypes.string
      })
  ).isRequired,
};

export default MoviesList;
