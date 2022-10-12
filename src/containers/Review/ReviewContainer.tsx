import { FC, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getAllReviews } from '../../shared/handlers';
import { useReview } from '../../shared/hooks';
import { Loader } from '../../shared/ui/components';
import styles from './ReviewContainer.module.css';

interface ReviewContainerProps {}

export const ReviewContainer: FC<ReviewContainerProps> = (
  props: ReviewContainerProps
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const effectCalled = useRef(false);
  const { setReviews } = useReview();

  useEffect(() => {
    if (effectCalled.current) {
      return;
    }

    effectCalled.current = true;
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const data = await getAllReviews();

      setReviews(data);
    } catch (err) {
      console.log('err', err);
    }

    setIsLoading(false);
  };

  return (
    <div data-testid="review-container" className={styles['review-container']}>
      {isLoading ? <Loader /> : <Outlet></Outlet>}
    </div>
  );
};
