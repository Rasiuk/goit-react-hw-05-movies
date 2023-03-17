import { LinkStyle, Poster, Title } from './FilmGallery.styled';

export const FilmItem = ({ film: { title, name, poster_path, id }, from }) => {
  const imageLink = `https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`;
  return (
    <li>
      <LinkStyle to={{ pathname: `/movies/${id}` }} state={{ from: from }}>
        <Poster src={imageLink} alt={title}></Poster>
        <Title>{title ? title : name}</Title>
      </LinkStyle>
    </li>
  );
};
