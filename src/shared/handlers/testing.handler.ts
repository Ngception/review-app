import { reviews } from '../fixtures';

export const createReview = () => {
  return reviews[0];
};

export const createReviews = () => {
  return reviews;
};

export const mockWindowLocation = () => {
  global.window = Object.create(window);
  Object.defineProperty(window, 'location', {
    value: {
      href: 'localhost'
    },
    writable: true
  });
};

export const restoreWindowLocation = (window: any) => {
  global.window = window;
};
