import { FC, ReactNode, useState } from 'react';
import { COLORS } from '../../../constants';

interface SkipLinkProps {
  children: ReactNode;
  color?: string;
  clickHandler: () => void;
}

export const SkipLink: FC<SkipLinkProps> = (props: SkipLinkProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleSkipLink = () => {
    setIsActive(!isActive);
  };

  const setClasses = () => {
    let classes = 'button skip-link';

    if (!isActive) {
      classes += ' is-sr-only';
    }

    if (props.color) {
      classes += ` ${COLORS[props.color]}`;
    } else {
      classes += ' is-primary';
    }

    return classes;
  };

  return (
    <button
      data-testid="skip-link"
      className={setClasses()}
      onFocus={toggleSkipLink}
      onBlur={toggleSkipLink}
      onClick={props.clickHandler}
    >
      {props.children}
    </button>
  );
};
