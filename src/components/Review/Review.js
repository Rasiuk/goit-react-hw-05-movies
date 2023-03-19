import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'servises/Fetchs';
import { ReviewItem } from './ReviewItem';

export const Review = () => {
  const [reviews, setReview] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getReviews(id).then(data => {
      console.log(data);
      setReview(data.data.results);
    });
  }, [id]);

  return (
    <ul>
      {reviews.length !== 0
        ? reviews.map(review => {
            return <ReviewItem review={review} />;
          })
        : 'sory not have reviews'}
    </ul>
  );
};
