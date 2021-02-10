import React from "react";
import ButtonShowMore from "../../blocks/button-show-more/button-show-more";
import MoviesList from "../../blocks/movies-list/movies-list";
import PropTypes from "prop-types";
import GenresList from "../../blocks/genres-list/genres-list";

const Catalog = ({movieItems, genresItems}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList items={genresItems}/>

      <MoviesList items={movieItems}/>

      <ButtonShowMore/>

    </section>
  );
};

Catalog.propTypes = {
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
  ).isRequired,
};

export default Catalog;
