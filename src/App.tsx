import { Link } from 'react-router-dom';
import { AppRoutes } from './routes';
import './App.css';

function App() {
  return (
    <main data-testid="app" className="App">
      <Link to="/reviews">
        <h1>Reviews</h1>
      </Link>
      <AppRoutes />
    </main>
  );
}

export default App;
