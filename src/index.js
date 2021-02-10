import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {movieItems} from "./mocks/movie-items";
import {genresItems} from "./mocks/genres-list";

const [currentMovie] = movieItems.filter((item) => item.isActive);
const moviesItems = movieItems.filter((item) => !item.isActive);

ReactDOM.render(
    <App genresItems={genresItems} movieItems={moviesItems} currentMovie={currentMovie}/>,
    document.querySelector(`#root`)
);
