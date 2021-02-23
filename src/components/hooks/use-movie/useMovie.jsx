import {useState, useEffect} from "react";
import {movieItems} from "../../../mocks/movie-items";

const useMovie = (itemId) => {
  const movie = movieItems.find((item) => item.id === itemId);

  const [currentMovie, setCurrentMovie] = useState(movie);

  useEffect(()=> {
    if (currentMovie.id !== itemId) {
      setCurrentMovie(movie);
    }
  }, [itemId]);

  return currentMovie;
};

export default useMovie;

