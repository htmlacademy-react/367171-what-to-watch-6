import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import Catalog from "../../sections/catalog/catalog";
import PageFooter from "../../sections/page-footer/page-footer";
import promoMovie from "../../../mocks/promo-movie";
import {movieItems} from "../../../mocks/movie-items";

const {backgroundImage, genre, released, posterImage, name} = promoMovie;

const MoviePage = () => {
  return (
    <MainLayout>
      <MovieCard type="full" backgroundImage={backgroundImage} genre={genre} released={released} posterImage={posterImage} name={name}/>
      <InnerLayout className={`page-content`}>
        <Catalog className={`catalog--like-this`} movieItems={movieItems} title={`More like this`}/>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>
  );
};

export default MoviePage;
