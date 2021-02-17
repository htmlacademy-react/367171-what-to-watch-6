import React, {useState, useEffect} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import PropTypes from "prop-types";
import {movieItems} from "../../../mocks/movie-items";

const AddReview = ({itemId}) => {

  const movie = movieItems.find((item) => item.id === itemId);

  const [currentMovie, setCurrentMovie] = useState(movie);

  useEffect(()=> {
    if (currentMovie.id !== itemId) {
      setCurrentMovie(movie);
    }
  }, [itemId]);

  return (
    <MainLayout>
      <MovieCard itemId={itemId} type="review" {...currentMovie}/>
    </MainLayout>
  );
};

AddReview.propTypes = {
  itemId: PropTypes.number
};

export default AddReview;
