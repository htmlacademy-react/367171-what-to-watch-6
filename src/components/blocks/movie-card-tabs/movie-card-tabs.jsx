import React from "react";
import MovieCardNav from "../movie-card-nav/movie-card-nav";
import MovieCardTabContent from "../movie-card-tab-content/movie-card-tab-content";

const MovieCardTabs = ({description, director, starring, scoresCount, rating}) => {
  return (
    <div className="movie-card__desc">
      <MovieCardNav/>
      <MovieCardTabContent description={description} director={director} starring={starring} scoresCount={scoresCount} rating={rating}/>
    </div>
  );
};

MovieCardTabs.propTypes = {...MovieCardTabContent.propTypes};

export default MovieCardTabs;
