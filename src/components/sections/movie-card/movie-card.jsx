import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from "../page-header/page-header";
import classnames from "classnames";

const MovieCard = ({type, title, poster, background, genre, releaseDate}) => {

  const Wrapper = ({children}) => type === `full` ? <div className="movie-card__hero">{children}</div> : null;

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired
  };

  const MovieCardHeader = ({title, genre, releaseDate}) => {
    return (
      <>
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">{genre}</span>
          <span className="movie-card__year">{releaseDate}</span>
        </p>
      </>
    );
  };

  return (
    <section className={classnames(`movie-card`, {[`movie-card--full`]: type === `full`})}>

      <Wrapper>
        <div className="movie-card__bg">
          <img src={background} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader className={`movie-card__head`}/>

        {type === `full` ? (
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <MovieCardHeader title={title} genre={genre} releaseDate={releaseDate}/>

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

                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        ) : null}
      </Wrapper>

      <div className={classnames(`movie-card__wrap`, {[`movie-card__translate-top`]: type === `full`})}>
        <div className="movie-card__info">
          <div className={classnames(`movie-card__poster`, {[`movie-card__poster--big`]: type === `full`})}>
            <img src={poster} alt="The Grand Budapest Hotel poster" width="218"
              height="327"/>
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
                    Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>

                  <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying
                    the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies
                    mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in
                    her murder.</p>

                  <p className="movie-card__director"><strong>Director: Wes Andreson</strong></p>

                  <p className="movie-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem
                    Dafoe and other</strong></p>
                </div>
              </>
              ) : (
                <>
                  <MovieCardHeader title={title} genre={genre} releaseDate={releaseDate}/>
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
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
};

export default MovieCard;
