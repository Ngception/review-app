import { FC } from 'react';
import { Review } from '../../../shared/interfaces';

interface ReviewItemProps {
  review: Review;
}

export const ReviewItem: FC<ReviewItemProps> = (props: ReviewItemProps) => {
  return (
    <div data-testid="review-item">
      <p data-testid="review-place">{props.review.place}</p>
      <p data-testid="review-rating">{props.review.rating}</p>
      <p data-testid="review-content">{props.review.content}</p>
      <h2 data-testid="review-author">{props.review.author}</h2>
      <p data-testid="review-published-at">{props.review.published_at}</p>
      <p data-testid="review-id">{props.review.id}</p>
    </div>
  );
};
