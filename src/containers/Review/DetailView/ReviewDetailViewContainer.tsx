import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useReview } from '../../../shared/hooks';
import { Review } from '../../../shared/interfaces';
import { ResponseContainer } from '../../Response/ResponseContainer';
import { Card } from '../../../shared/ui/components';
import styles from './ReviewDetailViewContainer.module.css';
import { ReviewDetail } from '../../../components/Review/Detail/ReviewDetail';

export const ReviewDetailViewContainer = () => {
  const [review, setReview] = useState<Review | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useReview();

  useEffect(() => {
    getReviewById();
  }, []);

  const getReviewById = () => {
    let reviewData;

    reviewData = state.reviews.find((review) => review.id === id);

    if (!reviewData) {
      navigate('/reviews');
      setIsLoading(false);
      return;
    }

    setReview(reviewData);
    setIsLoading(false);
  };

  return (
    <div data-testid="review-detail-view-container">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {review && (
            <>
              <div className={styles['review-item-card']}>
                <Card>
                  <ReviewDetail review={review} />
                </Card>
              </div>
              <ResponseContainer reviewId={review.id} />
            </>
          )}
        </>
      )}
    </div>
  );
};
