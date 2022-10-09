import { useContext } from 'react';
import { IReviewContext, ReviewContext } from '../context/ReviewContext';

export const useReview = () => {
  return useContext(ReviewContext) as IReviewContext;
};
