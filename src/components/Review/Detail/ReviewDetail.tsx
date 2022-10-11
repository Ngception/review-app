import { FC } from 'react';
import { useResponse } from '../../../shared/hooks';
import { Review } from '../../../shared/interfaces';
import { Icon } from '../../../shared/ui/components';
import styles from './ReviewDetail.module.css';

interface ReviewDetailProps {
  review: Review;
}

export const ReviewDetail: FC<ReviewDetailProps> = (
  props: ReviewDetailProps
) => {
  const { state } = useResponse();
  const formattedDate = new Date(props.review.published_at).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }
  );

  return (
    <div data-testid="review-detail" className={styles['review-detail']}>
      <div className={styles['review-header']}>
        <h2 data-testid="review-place">{props.review.place}</h2>
        <div data-testid="review-rating" className={styles['review-rating']}>
          {Array.from(Array(props.review.rating).keys()).map((_i) => (
            <Icon name={'star'} key={_i} />
          ))}
        </div>
      </div>
      <p data-testid="review-content" className={styles['review-content']}>
        {props.review.content}
      </p>
      <div className={`${styles['review-footer']}`}>
        <p data-testid="review-author">{props.review.author}</p>
        <p
          data-testid="review-published-at"
          className={styles['review-published-at']}
        >
          {formattedDate}
        </p>
        {state.responses.some(
          (response) => response.review_id === props.review.id
        ) ? (
          <div className={styles['responses-indicator-icon']}>
            <Icon name={'comments'} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
