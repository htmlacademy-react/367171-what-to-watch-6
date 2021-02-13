import React from "react";
import ButtonShowMore from "../../blocks/button-show-more/button-show-more";
import MoviesList from "../../blocks/movies-list/movies-list";
import PropTypes from "prop-types";
import GenresList from "../../blocks/genres-list/genres-list";
import classnames from "classnames";

const Catalog = ({movieItems, genresItems, filter = false, title = `Catalog`, className}) => {
  return (
    <section className={(classnames(`catalog`, className))}>
      <h2 className={classnames(`catalog-title`, {[`visually-hidden`]: title === `Catalog`})}>{title}</h2>

      {filter ? <GenresList items={genresItems}/> : null}

      <MoviesList items={movieItems}/>

      <ButtonShowMore/>

    </section>
  );
};

Catalog.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  title: PropTypes.string,
  movieItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired,
  genresItems: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
  ),
};

export default Catalog;
