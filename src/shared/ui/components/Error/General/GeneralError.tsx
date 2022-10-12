import { FC } from 'react';
import styles from './GeneralError.module.css';

interface GeneralErrorProps {}

export const GeneralError: FC<GeneralErrorProps> = (
  props: GeneralErrorProps
) => {
  return (
    <div data-testid="general-error" className={styles['error-container']}>
      <div className={styles['error-content']}>
        <h1 className="title">Oops...something went wrong.</h1>
        <div role="alert">
          <p className="subtitle">Please try again by refreshing the page.</p>
        </div>
      </div>
    </div>
  );
};
