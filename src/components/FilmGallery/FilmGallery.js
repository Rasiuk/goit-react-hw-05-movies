// import { useLocation } from 'react-router-dom';
import { Gallery, Ul } from './FilmGallery.styled';
import { FilmItem } from './FilmItem';
import PropTypes from 'prop-types';
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
FilmGallery.propTypes = {
  films: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  from: PropTypes.shape().isRequired,
};
