import { Review } from '../interfaces';

const ENDPOINT = `${process.env.PUBLIC_URL}/${process.env.REACT_APP_ENDPOINT}`;

export const getAllReviews = async (): Promise<Review[]> => {
  const response = await fetch(`${ENDPOINT}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  return response.json();
};
