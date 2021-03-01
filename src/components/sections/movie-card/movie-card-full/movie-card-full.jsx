import React from "react";
import PageHeader from "../../page-header/page-header";
import MovieCardInfo from "../../../blocks/movie-card-info/movie-card-info";
import MovieCardTabs from "../../../blocks/movie-card-tabs/movie-card-tabs";
import MovieCardPoster from "../../../blocks/movie-card-poster/movie-card-poster";
import movieCardPropTypes from "../move-card.prop";

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

MovieCardFull.propTypes = {...movieCardPropTypes};

export default MovieCardFull;
