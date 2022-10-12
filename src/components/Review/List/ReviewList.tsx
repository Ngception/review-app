import { FC, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Review } from '../../../shared/interfaces';
import { Card } from '../../../shared/ui/components';
import { ReviewListItem } from './Item/ReviewListItem';
import styles from './ReviewList.module.css';

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList: FC<ReviewListProps> = (props: ReviewListProps) => {
  const navigate = useNavigate();

  const handleKeyDown = (event: KeyboardEvent, reviewId: string) => {
    if (event.key === 'Enter') {
      navigate(reviewId);
    }

    return;
  };

  return (
    <ul data-testid="review-list" className={styles['review-list']}>
      {props?.reviews?.map((review) => (
        <li
          data-testid="review-list-item-container"
          className={styles['review-list-item']}
          tabIndex={0}
          key={review.id}
          aria-label={`${review.place} review`}
          aria-description="Click to navigate to detail view for this review"
          onClick={() => navigate(review.id)}
          onKeyDown={(event) => handleKeyDown(event, review.id)}
        >
          <Card>
            <ReviewListItem review={review} />
          </Card>
        </li>
      ))}
    </ul>
  );
};
