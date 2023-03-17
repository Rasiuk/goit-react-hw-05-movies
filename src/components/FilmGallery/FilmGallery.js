// import { useLocation } from 'react-router-dom';
import { Gallery, Ul } from './FilmGallery.styled';
import { FilmItem } from './FilmItem';

export const FilmGallery = ({ films, title, from }) => {
  return (
    <Gallery>
      <h2>{title}</h2>
      <Ul>
        {films.map(film => {
          return <FilmItem key={film.id} film={film} from={from} />;
        })}
      </Ul>
    </Gallery>
  );
};
