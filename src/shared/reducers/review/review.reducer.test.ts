import { createReviews } from '../../handlers';
import {
  initialReviewState,
  reviewReducer,
  REVIEW_ACTIONS
} from './review.reducer';

describe('ReviewReducer', () => {
  test('should return state for `SET_REVIEWS` type', () => {
    const payload = createReviews(),
      newState = reviewReducer(initialReviewState, {
        type: REVIEW_ACTIONS.SET_REVIEWS,
        payload
      });

    expect(newState).toEqual({
      reviews: payload
    });
  });

  test('should return state by default', () => {
    const newState = reviewReducer(initialReviewState, { type: '' });

    expect(newState).toEqual(initialReviewState);
  });
});
