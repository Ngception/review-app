import { Review } from '../../interfaces';

export interface ReviewAction {
  type: string;
  payload?: any;
}

export interface InitialReviewStateInterface {
  reviews: Review[];
}

export const REVIEW_ACTIONS = {
  SET_REVIEWS: 'SET REVIEWS'
};

export const initialReviewState = {
  reviews: []
};

export const reviewReducer = (
  state = initialReviewState,
  action: ReviewAction
) => {
  switch (action.type) {
    case REVIEW_ACTIONS.SET_REVIEWS:
      return {
        reviews: action.payload
      };
    default:
      return state;
  }
};
