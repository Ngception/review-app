import { FC, MouseEvent, ReactNode } from 'react';

interface DropdownItemProps {
  children: ReactNode;
  onClick: () => void;
  testId?: string;
}

export const DropdownItem: FC<DropdownItemProps> = (
  props: DropdownItemProps
) => {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();

    props.onClick();
  };

  return (
    <a
      data-testid={props.testId || 'dropdown-item'}
      href="#"
      className="dropdown-item"
      onClick={handleClick}
    >
      {props.children}
    </a>
  );
};
