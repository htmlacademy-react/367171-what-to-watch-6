import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {RoutePath} from "../../constants/routes";

const MovieCardPreview = ({name, previewImage}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link to={RoutePath.FILM_ID} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

MovieCardPreview.propTypes = {
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default MovieCardPreview;
