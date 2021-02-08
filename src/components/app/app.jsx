import React from 'react';
import MainPage from "../main/main";
import PropTypes from "prop-types";

const App = ({items, currentMovie}) => {

  return (
    <MainPage items={items} currentMovie={currentMovie}/>
  );
};

App.propTypes = {
  items: PropTypes.array.isRequired,
  currentMovie: PropTypes.object.isRequired
};

export default App;
