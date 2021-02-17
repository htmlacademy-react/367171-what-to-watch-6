import React from 'react';
import MainPage from "../pages/main/main";
import NotFound from "../pages/not-found/not-found";
import MyList from "../pages/my-list/my-list";
import Player from "../pages/player/player";
import SignIn from "../pages/sign-in/sign-in";
import MoviePage from "../pages/movie-page/movie-page";
import AddReview from "../pages/add-review/add-review";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {RoutePath} from "../constants/routes";

const App = ({movieItems, genresItems, promoMovie}) => {
  return (
    <Router>
      <Switch>
        <Route path={RoutePath.ROOT} exact render={
          () => <MainPage genresItems={genresItems} movieItems={movieItems} promoMovie={promoMovie}/>
        }/>
        <Route path={RoutePath.LOGIN} exact component={SignIn}/>
        <Route path={RoutePath.MY_LIST} exact component={MyList}/>
        <Route path={RoutePath.PLAYER_ID} component={Player}/>
        <Route path={RoutePath.FILM_ID} exact
          render={
            ({match}) => {
              const {id} = match.params;
              return <MoviePage itemId={Number(id)} />;
            }}/>
        <Route path={RoutePath.FILM_REVIEW} render={
          ({match}) => {
            const {id} = match.params;
            return <AddReview itemId={Number(id)} />;
          }}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>

  );
};

App.propTypes = {...MainPage.propTypes};

export default App;
