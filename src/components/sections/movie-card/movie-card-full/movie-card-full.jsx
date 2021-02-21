import React from "react";
import PageHeader from "../../page-header/page-header";
import MovieCardInfo from "../../../blocks/movie-card-info/movie-card-info";
import MovieCardTabs from "../../../blocks/movie-card-tabs/movie-card-tabs";
import MovieCardPoster from "../../../blocks/movie-card-poster/movie-card-poster";
import PropTypes from "prop-types";
import MovieCardTabContent from "../../../blocks/movie-card-tabs/movie-card-tab-content/movie-card-tab-content";

const MovieCardFull = ({name, posterImage, backgroundImage, description, rating, scoresCount, director, starring, genre, released}) => {
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader className={`movie-card__head`} activeLink={true}/>

        <div className="movie-card__wrap">
          <MovieCardInfo name={name} genre={genre} released={released} fullVersion={true}/>
        </div>

      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <MovieCardPoster size="big" name={name} posterImage={posterImage}/>

          <MovieCardTabs description={description} director={director} starring={starring} scoresCount={scoresCount} rating={rating}/>
        </div>
      </div>

    </section>
  );
};

MovieCardFull.propTypes = {
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

export default MovieCardFull;
