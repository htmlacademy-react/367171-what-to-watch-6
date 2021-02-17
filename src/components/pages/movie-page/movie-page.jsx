import React, {useState, useEffect} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import Catalog from "../../sections/catalog/catalog";
import PageFooter from "../../sections/page-footer/page-footer";
import {movieItems} from "../../../mocks/movie-items";

const MoviePage = ({itemId}) => {

  const movie = movieItems.find((item) => item.id === itemId);

  const [currentMovie, setCurrentMovie] = useState(movie);

  useEffect(()=> {
    if (currentMovie.id !== itemId) {
      setCurrentMovie(movie);
    }
  }, [itemId]);

  return (
    <MainLayout>
      <MovieCard type="full" {...currentMovie}/>
      <InnerLayout className={`page-content`}>
        <Catalog className={`catalog--like-this`} movieItems={movieItems} title={`More like this`}/>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>
  );
};

MoviePage.propTypes = {...MovieCard.propTypes};

export default MoviePage;
