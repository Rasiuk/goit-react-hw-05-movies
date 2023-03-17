import { Link } from 'react-router-dom';

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
    <div>
      <Link to={back.state?.from}>back</Link>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
      <h2>
        {original_title} ( {release_date})
      </h2>
      <p>User scrore: {vote_average}%</p>
      <div>
        <h3>Overview</h3> <p>{overview}</p>
      </div>
      <div>
        <h3>Genres:</h3>
        <p>{genres?.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};
