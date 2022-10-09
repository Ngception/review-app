import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useReview } from '../../../shared/hooks';
import { Review } from '../../../shared/interfaces';
import { ReviewItem } from '../../../components/Review';

export const ReviewDetailViewContainer = () => {
  const [review, setReview] = useState<Review | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useReview();

  useEffect(() => {
    getReviewById();
  }, []);

  const getReviewById = () => {
    let reviewId = id || localStorage.getItem('selectedReview');
    let reviewData;

    reviewData = state.reviews.find((review) => review.id === reviewId);

    if (!reviewData) {
      navigate('/reviews');
      return;
    }

    setReview(reviewData);
  };

  return review ? (
    <div>
      <ReviewItem review={review} />
    </div>
  ) : null;
};
