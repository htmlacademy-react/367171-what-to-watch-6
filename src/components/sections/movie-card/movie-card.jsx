import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from "../page-header/page-header";
import classnames from "classnames";
import {RoutePath} from "../../constants/routes";
import {Link} from "react-router-dom";

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

const MovieCardHeader = ({name, genre, released}) => {
  return (
    <>
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>
    </>
  );
};

MovieCardHeader.propTypes = {
  name: PropTypes.string,
  genre: PropTypes.string,
  released: PropTypes.number,
};

const MovieCard = ({type, name, posterImage, backgroundImage, genre, released}) => {

  const activeLink = type === `review` || type === `full` ? true : false;

  const movieName = type === `review` ? name : null;

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
            <div className="movie-card__desc">
              <MovieCardHeader name={name} genre={genre} released={released}/>

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

                <Link to={RoutePath.FILM_REVIEW} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        ) : null}

        {type === `review` ? (
          <div className="movie-card__poster movie-card__poster--small">
            <img src={posterImage} alt={name} width="218" height="327"/>
          </div>
        ) : null}

      </Wrapper>

      {type === `review` ? (
        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked/>
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
                <label className="rating__label" htmlFor="star-5">Rating 5</label>

                <input className="rating__input" id="star-6" type="radio" name="rating" value="6"/>
                <label className="rating__label" htmlFor="star-6">Rating 6</label>

                <input className="rating__input" id="star-7" type="radio" name="rating" value="7"/>
                <label className="rating__label" htmlFor="star-7">Rating 7</label>

                <input className="rating__input" id="star-8" type="radio" name="rating" value="8" checked/>
                <label className="rating__label" htmlFor="star-8">Rating 8</label>

                <input className="rating__input" id="star-9" type="radio" name="rating" value="9"/>
                <label className="rating__label" htmlFor="star-9">Rating 9</label>

                <input className="rating__input" id="star-10" type="radio" name="rating" value="10"/>
                <label className="rating__label" htmlFor="star-10">Rating 10</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>
      ) : (<div className={classnames(`movie-card__wrap`, {[`movie-card__translate-top`]: type === `full`})}>
        <div className="movie-card__info">
          <div className={classnames(`movie-card__poster`, {[`movie-card__poster--big`]: type === `full`})}>
            <img src={posterImage} alt={name} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            {type === `full` ? (
              <>
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list">
                    <li className="movie-nav__item movie-nav__item--active">
                      <a href="#" className="movie-nav__link">Overview</a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">Details</a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>

                <div className="movie-rating">
                  <div className="movie-rating__score">8,9</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">Very good</span>
                    <span className="movie-rating__count">240 ratings</span>
                  </p>
                </div>

                <div className="movie-card__text">
                  <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
                    Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`s friend and protege.</p>

                  <p>Gustave prides himself on providing first-class service to the hotel`s guests, including satisfying
                    the sexual needs of the many elderly women who stay there. When one of Gustave`s lovers dies
                    mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in
                    her murder.</p>

                  <p className="movie-card__director"><strong>Director: Wes Andreson</strong></p>

                  <p className="movie-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem
                    Dafoe and other</strong></p>
                </div>
              </>
            ) : (
              <>
                <MovieCardHeader name={name} genre={genre} released={released}/>
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
              </>
            )}
          </div>
        </div>
      </div>)}
    </section>
  );
};

MovieCard.propTypes = {
  ...MovieCardHeader.propTypes,
  type: PropTypes.string,
  posterImage: PropTypes.string,
  previewImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  runTime: PropTypes.number,
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  videoLink: PropTypes.string,
  previewVideoLink: PropTypes.string
};

export default MovieCard;
