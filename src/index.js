import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";

const items = [];
for (let i = 0; i < 19; i++) {
  items.push({
    key: i,
    title: `Fantastic Beasts: The Crimes of Grindelwald ${i}`,
    img: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    poster: `bg-the-grand-budapest-hotel.jpg`,
    genre: `Drama`,
    releaseDate: 2018,
    isActive: false
  });
}

items.push({
  key: 20,
  title: `The Grand Budapest Hotel`,
  img: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  poster: `bg-the-grand-budapest-hotel.jpg`,
  genre: `Drama`,
  releaseDate: 2014,
  isActive: true
});

const [currentMovie] = items.filter((item) => item.isActive);

ReactDOM.render(
    <App items={items} currentMovie={currentMovie}/>,
    document.querySelector(`#root`)
);
