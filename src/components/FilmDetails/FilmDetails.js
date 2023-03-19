import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Image, ImageBox } from './FilmDetails.styled';

export const FilmDetails = ({
  movie: {
    original_title,
    overview,
    vote_average,
    release_date,
    genres,
    poster_path,
  },
  back,
}) => {
  console.log(back);
  return (
    <Container>
      <ImageBox>
        <Link to={back}>back</Link>
        <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
      </ImageBox>
      <div>
        <h2>
          {original_title} ( {release_date})
        </h2>
        <p>User scrore: {vote_average}%</p>
        <h3>Overview</h3> <p>{overview}</p>
        <h3>Genres:</h3>
        <p>{genres?.map(genre => genre.name).join(', ')}</p>
        <ul>
          <li>
            <Link to="cast"> Cast</Link>
          </li>
          <li>
            <Link to="review"> Review</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};
