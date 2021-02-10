import React from "react";
import Logo from "../../blocks/logo/logo";
import classnames from "classnames";
import PropTypes from "prop-types";
import UserBlock from "../../blocks/user-block/user-block";

const PageHeader = ({className, children, isLogin = true, router = null}) => {
  return (
    <header className={classnames(`page-header`, className)}>
      <Logo router={router}/>
      {children}
      {isLogin ? <UserBlock/> : null}
    </header>
  );
};

PageHeader.propTypes = {
  router: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isLogin: PropTypes.bool
};

export default PageHeader;
