import { FC, ReactNode } from 'react';
import { COLORS } from '../../constants';
import './Button.css';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  testId?: string;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: (data: any) => void;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const setClasses = () => {
    let classes = 'button';

    if (props.color) {
      classes += ` ${COLORS[props.color]}`;
    }

    return classes;
  };

  return (
    <button
      data-testid={props.testId || 'button'}
      className={setClasses()}
      disabled={props.disabled}
      type={props.type || 'button'}
      onClick={props.onClick}
      aria-label={props.ariaLabel || undefined}
    >
      {props.children}
    </button>
  );
};
