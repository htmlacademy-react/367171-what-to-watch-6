import React from "react";
import PropTypes from "prop-types";
import {reviewsItems} from "../../../../mocks/reviews";
import Review from "../../review/review";
import {getTwoArraysFromOne} from "../../../utils/utils";

const MovieCardReviewCol = ({children}) => <div className="movie-card__reviews-col">{children}</div>;

MovieCardReviewCol.propTypes = {children: PropTypes.node.isRequired};

const MovieCardTabReviews = () => {

  const [arrayLeft, arrayRight] = getTwoArraysFromOne(reviewsItems);

  const [test] = arrayLeft;

  return (
    <>
      <MovieCardReviewCol>
        <Review {...test}/>
      </MovieCardReviewCol>
      <MovieCardReviewCol>
        <Review {...test}/>
      </MovieCardReviewCol>
    </>
  );
};

// MovieCardTabReviews.propTypes = {...movieCardTabPropTypes};

export default MovieCardTabReviews;
