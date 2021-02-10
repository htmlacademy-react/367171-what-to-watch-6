import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Link = ({children, router = null, className = null}) => router ? <a href={router} className={classnames(`logo__link`, className)}>{children}</a> : <a className={classnames(`logo__link`, className)}>{children}</a>;

Link.propTypes = {
  className: PropTypes.string,
  router: PropTypes.string,
  children: PropTypes.node.isRequired
};

const Logo = ({router, className}) => {
  return (
    <div className="logo">
      <Link router={router} className={className}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  router: PropTypes.string
};

export default Logo;
