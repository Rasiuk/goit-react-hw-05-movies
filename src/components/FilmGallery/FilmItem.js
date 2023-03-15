import { Link } from 'react-router-dom';

export const FilmItem = ({ film: { title, name, poster_path } }) => {
  const imageLink = `https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`;
  return (
    <li>
      <Link>
        <img src={imageLink} alt={title}></img>
        <h3>{title ? title : name}</h3>
      </Link>
    </li>
  );
};
