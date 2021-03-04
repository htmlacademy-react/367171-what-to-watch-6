import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {movieItems} from "./mocks/movie-items";
import promoMovie from "./mocks/promo-movie";


ReactDOM.render(
    <App movieItems={movieItems} promoMovie={promoMovie}/>,
    document.querySelector(`#root`)
);
