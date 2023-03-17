import { FilmDetails } from 'components/FilmDetails/FilmDetails';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getDetailFilm } from 'servises/Fetchs';
export const MovieDetail = () => {
  const location = useLocation();
  console.log(location);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getDetailFilm(id).then(data => {
      setMovie(data.data);
    });
  }, [id]);
  return <FilmDetails movie={movie} back={location} />;
};
