import { FilmGallery } from 'components/FilmGallery/FilmGallery';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPopularFilms } from 'servises/Fetchs';
const Home = () => {
  const location = useLocation();
  // console.log(location);
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getPopularFilms().then(data => {
      console.log(data);
      setTrends(data.data.results);
    });
  }, []);
  return (
    <FilmGallery films={trends} title={`Trending today`} from={location} />
  );
};
export default Home;
