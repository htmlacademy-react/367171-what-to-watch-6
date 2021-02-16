import React from "react";
import ButtonShowMore from "../../blocks/button-show-more/button-show-more";
import MoviesList from "../../blocks/movies-list/movies-list";
import PropTypes from "prop-types";
import GenresList from "../../blocks/genres-list/genres-list";
import classnames from "classnames";
import MovieCard from "../movie-card/movie-card";

const Catalog = ({movieItems, genresItems, filter = false, title = `Catalog`, className}) => {
  return (
    <section className={(classnames(`catalog`, className))}>
      <h2 className={classnames(`catalog-title`, {[`visually-hidden`]: title === `Catalog`})}>{title}</h2>

      {filter ? <GenresList genresItems={genresItems}/> : null}

      <MoviesList movieItems={movieItems}/>

      <ButtonShowMore/>

    </section>
  );
};

Catalog.propTypes = {
  ...MovieCard.propTypes,
  ...GenresList.propTypes,
  ...MoviesList.propTypes,
  className: PropTypes.string,
  filter: PropTypes.bool,
  title: PropTypes.string
};

export default Catalog;
