import React from 'react';
import MovieCard from "../../sections/movie-card/movie-card";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import MainLayout from "../../layouts/main-layout/main-layout";
import PageFooter from "../../sections/page-footer/page-footer";
import Catalog from "../../sections/catalog/catalog";

const MainPage = ({movieItems, promoMovie, genresItems}) => {
  return (
    <MainLayout>
      <MovieCard {...promoMovie}/>

      <InnerLayout className={`page-content`}>
        <Catalog movieItems={movieItems} genresItems={genresItems} filter={true}/>
        <PageFooter/>
      </InnerLayout>

    </MainLayout>
  );
};

MainPage.propTypes = {
  ...Catalog.propTypes,
  ...MovieCard.propTypes
};

export default MainPage;
