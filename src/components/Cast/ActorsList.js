export const Actors = ({ actor: { name, character, profile_path } }) => {
  return (
    <li>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : `https://ifpo.org.uk/wp-content/uploads/2020/10/cropped-9-93879_computer-icons-user-image-person-silhouette-user-silhouettes-4.png`
        }
        alt={name}
        width="180px"
      />
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </li>
  );
};
