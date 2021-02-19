import React from "react";
import PageHeader from "../../page-header/page-header";
import MovieCardPoster from "../../../blocks/movie-card-poster/movie-card-poster";
import MovieCard from "../movie-card";
import AddReviewForm from "../../../blocks/add-review-form/add-review-form";
import PropTypes from "prop-types";
import MovieCardInfo from "../../../blocks/movie-card-info/movie-card-info";
import MovieCardTabContent from "../../../blocks/movie-card-tabs/movie-card-tab-content/movie-card-tab-content";
import MovieCardShort from "../movie-card-short/movie-card-short";

const MovieCardReview = ({name, posterImage, backgroundImage}) => {
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader title={name} className={`movie-card__head`} activeLink={true}/>

        <MovieCardPoster size="small" name={name} posterImage={posterImage}/>

      </div>

      <AddReviewForm/>

    </section>
  );
};

MovieCardReview.propTypes = {
  ...MovieCardInfo.propTypes,
  ...MovieCardTabContent.propTypes,
  posterImage: PropTypes.string,
  previewImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  runTime: PropTypes.number,
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  videoLink: PropTypes.string,
  previewVideoLink: PropTypes.string
};

export default MovieCardReview;
