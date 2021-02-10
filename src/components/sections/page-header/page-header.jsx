import React from "react";
import Logo from "../../blocks/logo/logo";
import classnames from "classnames";
import PropTypes from "prop-types";
import UserBlock from "../../blocks/user-block/user-block";

const PageHeader = ({className, children}) => {
  return (
    <header className={classnames(`page-header`, className)}>
      <Logo/>
      {children}
      <UserBlock/>
    </header>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default PageHeader;
