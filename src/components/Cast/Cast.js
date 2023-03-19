import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'servises/Fetchs';
import { Actors } from './ActorsList';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getCast(id).then(data => {
      setActors(data.data.cast);
    });
  }, [id]);

  return (
    <ul>
      {actors.map(actor => {
        return <Actors key={actor.id} actor={actor} />;
      })}
    </ul>
  );
};
