import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const GenresList = ({genresItems}) => {
  return (
    <ul className="catalog__genres-list">
      {genresItems.map(({name, label, selectedItem}) => {
        return (
          <li key={name} className={classnames(`catalog__genres-item`, {[`catalog__genres-item--active`]: selectedItem})}>
            <a href="#" className="catalog__genres-link">{label}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  genresItems: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        selectedItem: PropTypes.bool
      })
  ),
};

export default GenresList;
