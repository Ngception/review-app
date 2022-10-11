import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './PrimaryNavbar.module.css';

interface PrimaryNavbarProps {}

export const PrimaryNavbar: FC<PrimaryNavbarProps> = (
  props: PrimaryNavbarProps
) => {
  return (
    <nav className={styles['primary-navbar']}>
      <Link to="/reviews" aria-description="Navigate to review list">
        Reviews
      </Link>
      <div></div>
    </nav>
  );
};
