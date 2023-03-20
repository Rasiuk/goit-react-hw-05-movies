import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Image,
  ImageBox,
  LinkMoreInfo,
  LinkStyle,
  MainInfo,
  Ul,
} from './FilmDetails.styled';

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
  return (
    <Container>
      <MainInfo>
        <ImageBox>
          <LinkStyle to={back}>back</LinkStyle>
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
        </div>
      </MainInfo>
      <div>
        <Ul>
          <h3>Addiional information</h3>
          <li>
            <LinkMoreInfo to="cast"> Cast</LinkMoreInfo>
          </li>
          <li>
            <LinkMoreInfo to="review"> Review</LinkMoreInfo>
          </li>
        </Ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};