import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  createReviews,
  mockWindowLocation,
  restoreWindowLocation
} from '../../../shared/handlers';
import { ReviewList } from './ReviewList';
import MockRouter from '../../testing/MockRouter';

describe('ReviewList', () => {
  const originalWindow = global.window;

  beforeAll(() => {
    mockWindowLocation();
  });

  afterAll(() => {
    restoreWindowLocation(originalWindow);
  });
  test('renders ReviewList component with multiple items', () => {
    const reviews = createReviews();

    render(
      <MockRouter route="/">
        <ReviewList reviews={reviews} />
      </MockRouter>
    );

    expect(screen.getByTestId('review-list')).toBeInTheDocument();
    expect(screen.getAllByTestId('review-item').length).toEqual(reviews.length);
  });

  it('renders ReviewList component with no items', () => {
    render(
      <MockRouter route="/">
        <ReviewList reviews={[]} />
      </MockRouter>
    );

    expect(screen.getByTestId('review-list')).toBeInTheDocument();
    expect(screen.queryAllByTestId('review-item').length).toEqual(0);
  });
});
