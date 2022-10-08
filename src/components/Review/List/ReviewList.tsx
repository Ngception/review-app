import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Review } from '../../../shared/interfaces';
import { ReviewItem } from '../Item/ReviewItem';

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList: FC<ReviewListProps> = (props: ReviewListProps) => {
  const navigate = useNavigate();

  const setSelectedReview = (review: Review) => {
    localStorage.setItem('selectedReview', review.id);
    navigate(review.id);
  };

  return (
    <ul data-testid="review-list">
      {props?.reviews?.map((review) => (
        <li key={review.id} onClick={() => setSelectedReview(review)}>
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
};
