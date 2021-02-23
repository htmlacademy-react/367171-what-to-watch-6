import React, {useState, useEffect} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import Catalog from "../../sections/catalog/catalog";
import PageFooter from "../../sections/page-footer/page-footer";
import {movieItems} from "../../../mocks/movie-items";
import useMovie from "../../hooks/use-movie/useMovie";

const MoviePage = ({itemId}) => {

  const currentMovie = useMovie(itemId);

  return (
    <MainLayout>
      <MovieCard type="full" currentMovie={currentMovie}/>
      <InnerLayout className={`page-content`}>
        <Catalog className={`catalog--like-this`} movieItems={movieItems} title={`More like this`}/>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>
  );
};

MoviePage.propTypes = {...MovieCard.propTypes};

export default MoviePage;
