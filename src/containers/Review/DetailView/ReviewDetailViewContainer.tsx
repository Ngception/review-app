import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useReview } from '../../../shared/hooks';
import { Review } from '../../../shared/interfaces';
import { ReviewItem } from '../../../components/Review';

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
      return;
    }

    setReview(reviewData);
    setIsLoading(false);
  };

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <>{review && <ReviewItem review={review} />}</>
  );
};
