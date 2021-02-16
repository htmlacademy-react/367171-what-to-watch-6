import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from "../page-header/page-header";
import classnames from "classnames";
import AddReviewForm from "../../blocks/add-review-form/add-review-form";
import MovieCardInfo from "../../blocks/movie-card-info/movie-card-info";
import MovieCardTabContent from "../../blocks/movie-card-tab-content/movie-card-tab-content";
import MovieCardTabs from "../../blocks/movie-card-tabs/movie-card-tabs";

const Wrapper = ({type, children}) => {
  return (
    (type === `full` || type === `review`) ? (
      <div className={classnames({[`movie-card__hero`]: type === `full`, [`movie-card__header`]: type === `review`})}>{children}</div>
    ) : children
  );
};

Wrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired
};

const MovieCardPoster = ({size, posterImage, name}) => {
  return (
    <div className={classnames(`movie-card__poster`, {[`movie-card__poster--small`]: size === `small`, [`movie-card__poster--big`]: size === `big`})}>
      <img src={posterImage} alt={name} width="218" height="327"/>
    </div>
  );
};

MovieCardPoster.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  posterImage: PropTypes.string
};

const MovieCard = ({type, name, posterImage, backgroundImage, description, rating, scoresCount, director, starring, genre, released}) => {

  const activeLink = type === `review` || type === `full` ? true : false;

  const movieName = type === `review` ? name : null;

  const sizePosterImage = type === `full` ? `big` : null;

  return (
    <section className={classnames(`movie-card`, {[`movie-card--full`]: type === `full` || type === `review`})}>

      <Wrapper type={type}>
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader title={movieName} className={`movie-card__head`} activeLink={activeLink}/>

        {type === `full` ? (
          <div className="movie-card__wrap">
            <MovieCardInfo name={name} genre={genre} released={released} fullVersion={type === `full`}/>
          </div>
        ) : null}

        {type === `review` ? <MovieCardPoster size="small" name={name} posterImage={posterImage}/> : null}

      </Wrapper>

      {type === `review` ? (
        <AddReviewForm/>
      ) : (
        <div className={classnames(`movie-card__wrap`, {[`movie-card__translate-top`]: type === `full`})}>
          <div className="movie-card__info">

            <MovieCardPoster size={sizePosterImage} name={name} posterImage={posterImage}/>

            {type === `full` ?
              <MovieCardTabs description={description} director={director} starring={starring} scoresCount={scoresCount} rating={rating}/>
              : <MovieCardInfo name={name} genre={genre} released={released}/>}
          </div>
        </div>)
      }
    </section>
  );
};

MovieCard.propTypes = {
  ...MovieCardInfo.propTypes,
  ...MovieCardTabContent.propTypes,
  type: PropTypes.string,
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
