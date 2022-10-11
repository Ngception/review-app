import React from 'react';
import { render, screen } from '@testing-library/react';
import { createReview } from '../../../shared/handlers';
import { ResponseProvider } from '../../../shared/context';
import { ReviewDetail } from './ReviewDetail';

describe('ReviewDetail', () => {
  test('renders ReviewDetail component', () => {
    const review = createReview();

    render(
      <ResponseProvider>
        <ReviewDetail review={review} />
      </ResponseProvider>
    );

    expect(screen.getByTestId('review-detail')).toBeInTheDocument();
    expect(screen.getByTestId('review-place')).toBeInTheDocument();
    expect(screen.getByTestId('review-rating')).toBeInTheDocument();
    expect(screen.getByTestId('review-content')).toBeInTheDocument();
    expect(screen.getByTestId('review-author')).toBeInTheDocument();
    expect(screen.getByTestId('review-published-at')).toBeInTheDocument();
  });
});
