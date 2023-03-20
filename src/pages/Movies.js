import { FilmGallery } from 'components/FilmGallery/FilmGallery';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'servises/Fetchs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  console.log(location);
  const onSubmit = evt => {
    evt.preventDefault();
    if (query === '') {
      return toast.info('Enter the title of the movie to search 🎬', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    searchMovies(query).then(data => setMovies(data.data.results));
  };
  const onInputChange = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: evt.target.value.toLowerCase() });
  };
  useEffect(() => {
    searchMovies(query).then(data => setMovies(data.data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* <form onSubmit={onSubmit}>
        <input
          value={query}
          name="query"
          onChange={onInputChange}
          className="input"
          type="text"
          autoomplete="off"
          autoFocus
          placeholder="Search films"
        />
        <button type="submit"> найти фильмы</button>
      </form> */}
      <SearchBar
        submit={onSubmit}
        onInputChange={onInputChange}
        inputValue={query}
      />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <FilmGallery films={movies} title={``} from={location} />
    </div>
  );
};
export default Movies;
