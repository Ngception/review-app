import { FC } from 'react';
import { Review } from '../../../shared/interfaces';
import { ReviewItem } from '../Item/ReviewItem';

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList: FC<ReviewListProps> = (props: ReviewListProps) => {
  return (
    <ul data-testid="review-list">
      {props.reviews.map((review) => (
        <li key={review.id}>
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
};
