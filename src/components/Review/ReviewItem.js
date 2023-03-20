import PropTypes from 'prop-types';
import { Item } from './Review.styled';

export const ReviewItem = ({ review: { author, content } }) => {
  return (
    <Item>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </Item>
  );
};
ReviewItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
