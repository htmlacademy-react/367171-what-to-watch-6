import React from "react";
import Logo from "../../blocks/logo/logo";
import classnames from "classnames";
import PropTypes from "prop-types";
import UserBlock from "../../blocks/user-block/user-block";

const PageHeader = ({className, children, title, isLogin = true, router = null}) => {
  return (
    <header className={classnames(`page-header`, className)}>
      <Logo router={router}/>
      {children}
      {title ? (
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href="movie-page.html" className="breadcrumbs__link">{title}</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>
      ) : null}
      {isLogin ? <UserBlock/> : null}
    </header>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  router: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isLogin: PropTypes.bool
};

export default PageHeader;
