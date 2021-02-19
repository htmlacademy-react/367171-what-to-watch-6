import React from "react";
import PageHeader from "../../page-header/page-header";
import MovieCardInfo from "../../../blocks/movie-card-info/movie-card-info";
import MovieCardPoster from "../../../blocks/movie-card-poster/movie-card-poster";
import PropTypes from "prop-types";
import MovieCardTabContent from "../../../blocks/movie-card-tabs/movie-card-tab-content/movie-card-tab-content";

const MovieCardShort = ({name, posterImage, backgroundImage, genre, released}) => {
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader className={`movie-card__head`} activeLink={true}/>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <MovieCardPoster name={name} posterImage={posterImage}/>
          <MovieCardInfo name={name} genre={genre} released={released}/>
        </div>
      </div>
    </section>
  );
};

MovieCardShort.propTypes = {
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

export default MovieCardShort;
