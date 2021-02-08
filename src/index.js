import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {movieItems} from "./mocks/movie-items";

const [currentMovie] = movieItems.filter((item) => item.isActive);
const items = movieItems.filter((item) => !item.isActive);

ReactDOM.render(
    <App items={items} currentMovie={currentMovie}/>,
    document.querySelector(`#root`)
);
