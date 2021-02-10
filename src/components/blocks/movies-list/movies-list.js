import React from "react";
import MovieCardPreview from "../movie-card-preview/movie-card-preview";
import PropTypes from "prop-types";

const MoviesList = ({items}) => {
  return (
    <div className="catalog__movies-list">
      {items.map(({id, title, img}) => (
        <MovieCardPreview key={id} title={title} img={img}/>
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired,
};

export default MoviesList;
