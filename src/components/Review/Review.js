import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'servises/Fetchs';
import { List } from './Review.styled';
import { ReviewItem } from './ReviewItem';

const Review = () => {
  const [reviews, setReview] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getReviews(id).then(data => {
      console.log(data);
      setReview(data.data.results);
    });
  }, [id]);

  return (
    <List>
      {reviews.length !== 0
        ? reviews.map(review => {
            return <ReviewItem key={review.id} review={review} />;
          })
        : 'sory not have reviews'}
    </List>
  );
};
export default Review;
