import { FC, useEffect, useState } from 'react';
import { useReview } from '../../../shared/hooks';
import { Review } from '../../../shared/interfaces';
import { ReviewList } from '../../../components/Review';
import { Pagination } from '../../../shared/ui/components/Pagination/Pagination';

interface ReviewContainerProps {}

export const ReviewListViewContainer: FC<ReviewContainerProps> = (
  props: ReviewContainerProps
) => {
  const [reviewList, setReviewList] = useState<Review[] | []>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [recordsPerPage, setRecordsPerPage] = useState<number>(10);
  const { state } = useReview();
  const totalPages = Math.ceil(reviewList.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentReviews = reviewList.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  useEffect(() => {
    setReviewList(state.reviews);
  }, [state.reviews]);

  return (
    <div data-testid="review-list-view-container">
      <ReviewList reviews={currentReviews} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        recordsPerPage={recordsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
