import { Home } from 'pages/Home';
import { MovieDetail } from 'pages/MovieDetail';
import { Movies } from 'pages/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Review } from './Review/Review';
export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:id" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
    </div>
  );
};
