import React from "react";
import PropTypes from "prop-types";

const Tooltip = ({children, title, style}) => {
  return (
    <div className="tooltip" style={style}>
      {children}
      <span className="tooltip-content tooltip-bottom">{title}</span>
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  style: PropTypes.objectOf(PropTypes.string)
};

export default Tooltip;
