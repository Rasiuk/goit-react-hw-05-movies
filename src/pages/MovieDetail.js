import { FilmDetails } from 'components/FilmDetails/FilmDetails';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getDetailFilm } from 'servises/Fetchs';
const MovieDetail = () => {
  // console.log(location);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/' ?? '/movies');

  useEffect(() => {
    getDetailFilm(id).then(data => {
      setMovie(data.data);
    });
  }, [id]);
  return (
    <div>
      <FilmDetails movie={movie} back={backLinkLocationRef.current} />
    </div>
  );
};
export default MovieDetail;
