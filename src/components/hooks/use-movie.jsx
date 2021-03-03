import {useState, useEffect} from "react";
import {movieItems} from "../../mocks/movie-items";
import {useParams} from "react-router-dom";

const useMovie = () => {
  const {id} = useParams();
  const itemId = Number(id);

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

