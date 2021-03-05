import React, {useState} from "react";
import ButtonShowMore from "../../blocks/button-show-more/button-show-more";
import MoviesList from "../../blocks/movies-list/movies-list";
import PropTypes from "prop-types";
import GenresList from "../../blocks/genres-list/genres-list";
import classnames from "classnames";
import MovieCard from "../movie-card/movie-card";
import {getGenresItems} from "../../utils/utils";
import {connect} from "react-redux";

const Catalog = ({movies, genres, currentMovieGenre, filter = false, title = `Catalog`, className}) => {

  const genresItems = getGenresItems(movies);
  const similarMovies = movies.filter(({genre}) => genre === currentMovieGenre);

  const [isActiveKey, setActiveKey] = useState(genres);
  const [isCurrentMoviesList, setCurrentMoviesList] = useState(movies);

  const currentMovieItems = movies.filter(({genre}) => genre === isActiveKey);

  const movieItems = currentMovieGenre ? similarMovies : isCurrentMoviesList;

  const onClick = (evt) => {
    evt.preventDefault();
    setActiveKey(evt.target.id);
    if (isActiveKey !== evt.target.id) {
      setCurrentMoviesList(currentMovieItems);
    }
  };

  return (
    <section className={(classnames(`catalog`, className))}>
      <h2 className={classnames(`catalog-title`, {[`visually-hidden`]: title === `Catalog`})}>{title}</h2>

      {filter ? <GenresList genresItems={genresItems} activeKey={isActiveKey} onClick={onClick}/> : null}

      <MoviesList movieItems={movieItems}/>

      {movieItems.length > 4 ? <ButtonShowMore/> : null}

    </section>
  );
};

Catalog.propTypes = {
  ...MovieCard.propTypes,
  ...GenresList.propTypes,
  className: PropTypes.string,
  filter: PropTypes.bool,
  title: PropTypes.string,
  currentMovieGenre: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres
  };
};

export default connect(mapStateToProps)(Catalog);
