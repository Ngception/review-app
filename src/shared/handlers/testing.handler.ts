import { responses, reviews } from '../fixtures';
import { Response, Review } from '../interfaces';

// Reviews
export const createReview = (): Review => {
  return reviews[0];
};

export const createReviews = (): Review[] => {
  return reviews;
};

// Responses
export const createResponse = (): Response => {
  return responses[0];
};

export const createResponses = (): Response[] => {
  return responses;
};

// Router
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
