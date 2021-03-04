import React from "react";
import ButtonShowMore from "../../blocks/button-show-more/button-show-more";
import MoviesList from "../../blocks/movies-list/movies-list";
import PropTypes from "prop-types";
import GenresList from "../../blocks/genres-list/genres-list";
import classnames from "classnames";
import MovieCard from "../movie-card/movie-card";
import {getGenresItems} from "../../utils/utils";

const Catalog = ({movieItems, currentMovieGenre, filter = false, title = `Catalog`, className}) => {

  const genresItems = getGenresItems(movieItems);

  const similarMovies = movieItems.filter(({genre}) => genre === currentMovieGenre);

  const movies = currentMovieGenre ? similarMovies : movieItems;

  return (
    <section className={(classnames(`catalog`, className))}>
      <h2 className={classnames(`catalog-title`, {[`visually-hidden`]: title === `Catalog`})}>{title}</h2>

      {filter ? <GenresList genresItems={genresItems}/> : null}

      <MoviesList movieItems={movies}/>

      {movies.length > 4 ? <ButtonShowMore/> : null}

    </section>
  );
};

Catalog.propTypes = {
  ...MovieCard.propTypes,
  ...GenresList.propTypes,
  ...MoviesList.propTypes,
  className: PropTypes.string,
  filter: PropTypes.bool,
  title: PropTypes.string,
  currentMovieGenre: PropTypes.string
};

export default Catalog;
