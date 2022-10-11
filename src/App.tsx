import { AppRoutes } from './routes';
import { PrimaryNavbar } from './components/Nav';
import './App.css';

function App() {
  return (
    <main data-testid="app" className="App">
      <div className="header">
        <PrimaryNavbar />
      </div>
      <div className="content">
        <AppRoutes />
      </div>
    </main>
  );
}

export default App;
