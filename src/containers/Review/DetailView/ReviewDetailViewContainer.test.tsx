import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  mockWindowLocation,
  restoreWindowLocation
} from '../../../shared/handlers';
import { ReviewProvider } from '../../../shared/context';
import MockRouter from '../../../components/testing/MockRouter';
import { ReviewDetailViewContainer } from './ReviewDetailViewContainer';

describe('ReviewDetailViewContainer', () => {
  const originalWindow = global.window;

  beforeAll(() => {
    mockWindowLocation();
  });

  afterAll(() => {
    restoreWindowLocation(originalWindow);
  });

  test('renders ReviewDetailViewContainer component', () => {
    render(
      <MockRouter route="/">
        <ReviewProvider>
          <ReviewDetailViewContainer />
        </ReviewProvider>
      </MockRouter>
    );

    expect(
      screen.getByTestId('review-detail-view-container')
    ).toBeInTheDocument();
  });
});
