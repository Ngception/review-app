import React from 'react';
import { render } from '@testing-library/react';
import {
  mockWindowLocation,
  restoreWindowLocation
} from '../../shared/handlers';
import { ReviewProvider } from '../../shared/context';
import MockRouter from '../../components/testing/MockRouter';
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
    const component = render(
      <MockRouter route="/">
        <ReviewProvider>
          <ReviewDetailViewContainer />
        </ReviewProvider>
      </MockRouter>
    ).baseElement;

    expect(component).toBeTruthy();
  });
});
