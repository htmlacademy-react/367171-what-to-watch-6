import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const GenresList = ({genresItems, activeKey, onClick}) => {

  return (
    <ul className="catalog__genres-list" onClick={onClick}>
      {genresItems.map((item, index) => {
        return (
          <li key={index} className={classnames(`catalog__genres-item`, {[`catalog__genres-item--active`]: activeKey === item})}>
            <a id={item} href="#" className="catalog__genres-link">{item}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  genresItems: PropTypes.arrayOf(PropTypes.string)
};

export default GenresList;
