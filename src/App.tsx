import { AppRoutes } from './routes';
import { PrimaryNavbar } from './components/Nav';
import { SkipLink } from './shared/ui/components/Button/SkipLink/SkipLink';
import './App.css';

function App() {
  const skipToMainContent = () => {
    const content = document.querySelector('.content');
    const focusableSelectors =
      'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])';

    let focusableElements: NodeListOf<HTMLElement>;

    if (content) {
      focusableElements = content?.querySelectorAll(focusableSelectors);

      if (focusableElements.length) {
        focusableElements[0]?.focus();

        console.log(document.activeElement);
        return;
      }
    }
  };

  return (
    <main data-testid="app" className="App">
      <div className="header">
        <div className="skip-link">
          <SkipLink clickHandler={skipToMainContent}>
            Skip to main content
          </SkipLink>
        </div>
        <PrimaryNavbar />
      </div>
      <div className="content">
        <AppRoutes />
      </div>
    </main>
  );
}

export default App;
