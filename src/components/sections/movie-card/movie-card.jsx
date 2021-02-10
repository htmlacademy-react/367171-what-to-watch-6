import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from "../page-header/page-header";

const MovieCard = ({title, poster, background, genre, releaseDate}) => {

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={background} alt={title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader className={`movie-card__head`}/>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster} alt="The Grand Budapest Hotel poster" width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
};

export default MovieCard;
