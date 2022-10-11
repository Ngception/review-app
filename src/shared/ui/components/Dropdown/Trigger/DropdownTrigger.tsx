import { FC, ReactNode } from 'react';
import { COLORS } from '../../../constants';

interface DropdownTriggerProps {
  children: ReactNode;
  color?: string;
  testId?: string;
}

export const DropdownTrigger: FC<DropdownTriggerProps> = (
  props: DropdownTriggerProps
) => {
  const setClasses = () => {
    let classes = 'button';

    if (props.color) {
      classes += ` ${COLORS[props.color]}`;
    }

    return classes;
  };

  return (
    <div className="dropdown-trigger">
      <button
        data-testid={props.testId || 'dropdown-trigger'}
        className={setClasses()}
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        {props.children}
      </button>
    </div>
  );
};
