import React from 'react';
import PropTypes from "prop-types";

const InnerLayout = ({className, children}) => <div className={className}>{children}</div>;

InnerLayout.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default InnerLayout;
