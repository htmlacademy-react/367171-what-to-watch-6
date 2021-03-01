import React from "react";
import PageHeader from "../../page-header/page-header";
import MovieCardPoster from "../../../blocks/movie-card-poster/movie-card-poster";
import AddReviewForm from "../../../blocks/add-review-form/add-review-form";
import movieCardPropTypes from "../move-card.prop";

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

MovieCardReview.propTypes = {...movieCardPropTypes};

export default MovieCardReview;
