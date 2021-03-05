import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../../store/actions";
import {getGenresItems} from "../../utils/utils";

const GenresList = ({movies, genres, changeFilter}) => {

  const genresItems = getGenresItems(movies);

  const onChangeFilterClick = (evt) => {
    evt.preventDefault();
    changeFilter(evt);
  };

  return (
    <ul className="catalog__genres-list" onClick={onChangeFilterClick}>
      {genresItems.map((item, index) => {
        return (
          <li key={index} className={classnames(`catalog__genres-item`, {[`catalog__genres-item--active`]: genres === item})}>
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

const mapStateToProps = ({genres, movies}) => {
  return {genres, movies};
};

const mapDispatchToProps = (dispatch) => {

  const {changeFilter} = bindActionCreators(actions, dispatch);

  return {changeFilter};
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
