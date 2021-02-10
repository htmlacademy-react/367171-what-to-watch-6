import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const GenreItem = ({key, label, selectedItem}) => {
  return (
    <li key={key} className={classnames(`catalog__genres-item`, {[`catalog__genres-item--active`]: selectedItem})}>
      <a href="#" className="catalog__genres-link">{label}</a>
    </li>
  );
};

GenreItem.propTypes = {
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selectedItem: PropTypes.boolean
};

const GenresList = ({items}) => {
  return (
    <ul className="catalog__genres-list">
      {items.map(({name, label, selectedItem}) => <GenreItem label={label} key={name} selectedItem={selectedItem}/>)}
    </ul>
  );
};

GenresList.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        selectedItem: PropTypes.boolean
      })
  ).isRequired,
};

export default GenresList;
