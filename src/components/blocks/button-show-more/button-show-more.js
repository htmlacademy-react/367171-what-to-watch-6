import React from "react";

const ButtonShowMore = ({onClick}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
    </div>
  );
};

export default ButtonShowMore;
