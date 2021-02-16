import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {movieItems} from "./mocks/movie-items";
import {genresItems} from "./mocks/genres-list";
import promoMovie from "./mocks/promo-movie";


ReactDOM.render(
    <App genresItems={genresItems} movieItems={movieItems} currentMovie={promoMovie}/>,
    document.querySelector(`#root`)
);
