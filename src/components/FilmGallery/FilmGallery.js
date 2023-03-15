import { FilmItem } from './FilmItem';

export const FilmGallery = ({ films, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {films.map(film => {
          return <FilmItem key={film.id} film={film} />;
        })}
      </ul>
    </div>
  );
};
