import React from 'react';
import { render, screen } from '@testing-library/react';
import { createReviews } from '../../../shared/handlers';
import { ReviewList } from './ReviewList';

describe('ReviewList', () => {
  test('renders ReviewList component with multiple items', () => {
    const reviews = createReviews();

    render(<ReviewList reviews={reviews} />);

    expect(screen.getByTestId('review-list')).toBeInTheDocument();
    expect(screen.getAllByTestId('review-item').length).toEqual(reviews.length);
  });

  it('renders ReviewList component with no items', () => {
    render(<ReviewList reviews={[]} />);

    expect(screen.getByTestId('review-list')).toBeInTheDocument();
    expect(screen.queryAllByTestId('review-item').length).toEqual(0);
  });
});
