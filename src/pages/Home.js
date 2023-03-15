import { FilmGallery } from 'components/FilmGallery/FilmGallery';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getPopularFilms } from 'servises/Fetchs';
export const Home = () => {
  const [trends, setTrends] = useState([]);
  // const navigate = useNavigate();
  useEffect(() => {
    getPopularFilms().then(data => {
      console.log(data);
      setTrends(data.data.results);
    });
  }, []);
  return <FilmGallery films={trends} title={`Trending today`} />;
};
