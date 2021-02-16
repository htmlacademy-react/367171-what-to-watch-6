import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import promoMovie from "../../../mocks/promo-movie";

const {backgroundImage, genre, released, posterImage, name} = promoMovie;

const AddReview = () => {
  return (
    <MainLayout>
      <MovieCard type="review" backgroundImage={backgroundImage} genre={genre} released={released} posterImage={posterImage} name={name}/>
    </MainLayout>
  );
};

export default AddReview;
