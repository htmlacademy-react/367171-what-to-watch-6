import MovieCardTabReviews from "../blocks/movie-card-tabs/movie-card-tab-reviews/movie-card-tab-reviews";
import MovieCardTabOverview from "../blocks/movie-card-tabs/movie-card-tab-overview/movie-card-tab-overview";
import MovieCardTabDetails from "../blocks/movie-card-tabs/movie-card-tab-details/movie-card-tab-details";

export const TabsItems = [
  {id: 1, name: `Overview`, component: MovieCardTabOverview},
  {id: 2, name: `Details`, component: MovieCardTabDetails},
  {id: 3, name: `Reviews`, component: MovieCardTabReviews}
];

export const ONE_HOUR = 60;
