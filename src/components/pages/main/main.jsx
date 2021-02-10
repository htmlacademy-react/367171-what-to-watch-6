import React from 'react';
import PropTypes from "prop-types";
import MovieCard from "../../sections/movie-card/movie-card";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import MainLayout from "../../layouts/main-layout/main-layout";
import PageFooter from "../../sections/page-footer/page-footer";
import Catalog from "../../sections/catalog/catalog";

const MainPage = ({movieItems, currentMovie, genresItems}) => {
  return (
    <MainLayout>
      <MovieCard {...currentMovie}/>

      <InnerLayout className={`page-content`}>
        <Catalog movieItems={movieItems} genresItems={genresItems} filter={true}/>
        <PageFooter/>
      </InnerLayout>

    </MainLayout>
  );
};

MainPage.propTypes = {
  movieItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired,
  genresItems: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
  ).isRequired,
  title: PropTypes.string,
  img: PropTypes.string,
  currentMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    isActive: PropTypes.boolean
  })
};

export default MainPage;
