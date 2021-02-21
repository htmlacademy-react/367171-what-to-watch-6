import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import {movieItems} from "../../../mocks/movie-items";

const [currentMovie] = movieItems.filter((item) => item.isActive);
const {background, genre, releaseDate, poster, title} = currentMovie;

const AddReview = () => {
  return (
    <MainLayout>
      <MovieCard type="review" background={background} genre={genre} releaseDate={releaseDate} poster={poster} title={title}/>
    </MainLayout>
  );
};

export default AddReview;
