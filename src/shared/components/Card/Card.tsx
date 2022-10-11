import { FC, ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = (props: CardProps) => {
  return (
    <div data-testid="card" className={styles['card']}>
      {props.children}
    </div>
  );
};
