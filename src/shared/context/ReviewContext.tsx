import { createContext, FC, ReactNode, useReducer } from 'react';
import { Review } from '../interfaces';
import {
  InitialReviewStateInterface,
  initialReviewState,
  reviewReducer,
  REVIEW_ACTIONS
} from '../reducers/review/review.reducer';

export interface IReviewContext {
  state: InitialReviewStateInterface;
  setReviews: (reviews: Review[]) => void;
}

export const ReviewContext = createContext<IReviewContext | null>(null);

interface ReviewProviderProps {
  initialState?: InitialReviewStateInterface;
  children: ReactNode;
}

export const ReviewProvider: FC<ReviewProviderProps> = ({
  initialState,
  children
}) => {
  const [state, dispatch] = useReducer(reviewReducer, initialReviewState);

  const value = {
    state: initialState || (state as InitialReviewStateInterface),
    setReviews: (reviews: Review[]) =>
      dispatch({
        type: REVIEW_ACTIONS.SET_REVIEWS,
        payload: reviews
      })
  };

  return (
    <ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>
  );
};
