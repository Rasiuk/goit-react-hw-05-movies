import { FilmGallery } from 'components/FilmGallery/FilmGallery';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'servises/Fetchs';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query');

  const onSubmit = evt => {
    if (query === null) {
      alert('write something');
      return;
    }
    evt.preventDefault();
    searchMovies(query).then(data => setMovies(data.data.results));
  };
  const onInputChange = evt => {
    setSearchParams({ query: evt.target.value });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="query"
          onChange={onInputChange}
          className="input"
          type="text"
          autoomplete="off"
          autoFocus
          placeholder="Search films"
        />
        <button type="submit"> найти фильмы</button>
      </form>
      <div>
        {movies ? (
          <FilmGallery films={movies} title={`Result of search`} />
        ) : (
          <h2>Введите название фильма</h2>
        )}
      </div>
      {/* <FilmGallery films={movies} title={`Result of search`} /> */}
    </div>
  );
};