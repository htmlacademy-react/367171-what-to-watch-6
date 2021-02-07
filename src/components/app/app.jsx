import React from 'react';
import MainPage from "../main/main";

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    title: `Fantastic Beasts: The Crimes of Grindelwald ${i}`,
    img: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  });
}

const App = () => {

  return (
    <MainPage items={data}/>
  );
};

export default App;
