import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getAllReviews } from '../../shared/handlers';
import { useReview } from '../../shared/hooks';
import { Loader } from '../../shared/ui/components';
import { useError } from '../../shared/ui/components/Error';
import styles from './ReviewContainer.module.css';

interface ReviewContainerProps {}

export const ReviewContainer: FC<ReviewContainerProps> = (
  props: ReviewContainerProps
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const effectCalled = useRef(false);
  const { setReviews } = useReview();
  const { setError } = useError();

  const fetchReviews = useCallback(async () => {
    try {
      const data = await getAllReviews();

      setReviews(data);
    } catch (err) {
      setError(400);
    }

    setIsLoading(false);
  }, [setError, setReviews]);

  useEffect(() => {
    if (effectCalled.current) {
      return;
    }

    effectCalled.current = true;
    fetchReviews();
  }, [fetchReviews]);

  return (
    <div data-testid="review-container" className={styles['review-container']}>
      {isLoading ? <Loader /> : <Outlet></Outlet>}
    </div>
  );
};
