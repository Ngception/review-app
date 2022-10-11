import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Review } from '../../../shared/interfaces';
import { Card } from '../../../shared/components';
import { ReviewItem } from '../Item/ReviewItem';
import styles from './ReviewList.module.css';

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList: FC<ReviewListProps> = (props: ReviewListProps) => {
  const navigate = useNavigate();

  return (
    <ul data-testid="review-list" className={styles['review-list']}>
      {props?.reviews?.map((review) => (
        <li
          className={styles['review-list-item']}
          onClick={() => navigate(review.id)}
          key={review.id}
        >
          <Card>
            <ReviewItem review={review} />
          </Card>
        </li>
      ))}
    </ul>
  );
};
