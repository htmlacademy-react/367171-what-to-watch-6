import React from "react";
import Logo from "../../blocks/logo/logo";
import classnames from "classnames";
import PropTypes from "prop-types";
import UserBlock from "../../blocks/user-block/user-block";
import {Link} from "react-router-dom";

const PageHeader = ({className, children, title, isLogin = true, activeLink}) => {
  return (
    <header className={classnames(`page-header`, className)}>
      <Logo activeLink={activeLink}/>
      {children}
      {title ? (
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to="/films/:id" className="breadcrumbs__link">{title}</Link>
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
  activeLink: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  isLogin: PropTypes.bool
};

export default PageHeader;
