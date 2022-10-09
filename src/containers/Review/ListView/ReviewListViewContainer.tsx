import { FC, useEffect, useState } from 'react';
import { useReview } from '../../../shared/hooks';
import { Review } from '../../../shared/interfaces';
import { ReviewList } from '../../../components/Review';

interface ReviewContainerProps {}

export const ReviewListViewContainer: FC<ReviewContainerProps> = (
  props: ReviewContainerProps
) => {
  const [reviewList, setReviewList] = useState<Review[] | []>([]);
  const { state } = useReview();

  useEffect(() => {
    setReviewList(state.reviews);
  }, [state.reviews?.length]);

  return <ReviewList reviews={reviewList} />;
};
