import React from 'react';
import PropTypes from 'prop-types';
import {RoutePath} from "../../../constants/routes";
import Link from "../../link/link";

const MovieCardPreview = ({id, name, previewImage}) => {
  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={()=> console.log(id)}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link pathName={`${RoutePath.FILMS}${id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

MovieCardPreview.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default MovieCardPreview;
