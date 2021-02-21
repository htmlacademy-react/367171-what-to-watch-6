import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import {movieItems} from "../../../mocks/movie-items";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import Catalog from "../../sections/catalog/catalog";
import PageFooter from "../../sections/page-footer/page-footer";

const items = movieItems.slice(0, 4);
const [currentMovie] = movieItems.filter((item) => item.isActive);
const {background, genre, releaseDate, poster, title} = currentMovie;

const MoviePage = () => {
  return (
    <MainLayout>
      <MovieCard type="full" background={background} genre={genre} releaseDate={releaseDate} poster={poster} title={title}/>
      <InnerLayout className={`page-content`}>
        <Catalog className={`catalog--like-this`} movieItems={items} title={`More like this`}/>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>
  );
};

export default MoviePage;
