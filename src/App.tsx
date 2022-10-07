import { useEffect, useState } from 'react';
import { getAllReviews } from './shared/handlers';
import { Review } from './shared/interfaces';
import { ReviewList } from './components/Review/List/ReviewList';

import './App.css';

function App() {
  const [reviews, setReviews] = useState<Review[] | []>([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const data = await getAllReviews();

      setReviews(data);
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <div data-testid="app" className="App">
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;
