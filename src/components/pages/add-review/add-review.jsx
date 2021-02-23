import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import PropTypes from "prop-types";
import useMovie from "../../hooks/use-movie/useMovie";

const AddReview = ({itemId}) => {

  const currentMovie = useMovie(itemId);

  return (
    <MainLayout>
      <MovieCard type="review" currentMovie={currentMovie}/>
    </MainLayout>
  );
};

AddReview.propTypes = {
  itemId: PropTypes.number
};

export default AddReview;
