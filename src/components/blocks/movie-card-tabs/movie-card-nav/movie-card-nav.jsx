import React from "react";
import classnames from "classnames";

const MovieCardNavItem = ({activeKey, id, title, onClick}) => {
  return (
    <li className={classnames(`movie-nav__item`, {[`movie-nav__item--active`]: activeKey === id})}>
      <a id={id} href="#" className="movie-nav__link" onClick={onClick}>{title}</a>
    </li>
  );
};

export const MovieCardNav = ({items, activeKey, defaultActiveKey = 1, onClick})=> {

  const isActiveKey = activeKey ? activeKey : defaultActiveKey;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {items.map(({id, name}) => <MovieCardNavItem activeKey={isActiveKey} key={id} id={id} title={name} onClick={onClick}/>)}
      </ul>
    </nav>
  );
};

export default MovieCardNav;
