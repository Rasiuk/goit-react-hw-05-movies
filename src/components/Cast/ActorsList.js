import PropTypes from 'prop-types';
import { ActorCard } from './Cast.styled';

export const Actors = ({ actor: { name, character, profile_path } }) => {
  return (
    <ActorCard>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : `https://ifpo.org.uk/wp-content/uploads/2020/10/cropped-9-93879_computer-icons-user-image-person-silhouette-user-silhouettes-4.png`
        }
        alt={name}
        width="200px"
        height="300px"
      />
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </ActorCard>
  );
};
Actors.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};
