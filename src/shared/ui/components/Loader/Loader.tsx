import { FC } from 'react';
import { COLORS } from '../../constants';
import styles from './Loader.module.css';

interface LoaderProps {
  color?: string;
}

export const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  const setClasses = () => {
    let classes = 'progress';

    if (props.color) {
      classes += ` ${COLORS[props.color]}`;
    }

    return classes;
  };

  return (
    <div className={styles['loader']}>
      <progress data-testid="loader" className={setClasses()} max="100">
        30%
      </progress>
    </div>
  );
};
