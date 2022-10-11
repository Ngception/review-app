import { FC, ReactNode } from 'react';

interface DropdownMenuProps {
  children: ReactNode;
  testId?: string;
}

export const DropdownMenu: FC<DropdownMenuProps> = (
  props: DropdownMenuProps
) => {
  return (
    <div
      data-testid={props.testId || 'dropdown-menu'}
      className="dropdown-menu"
      id="dropdown-menu"
      role="menu"
    >
      <div className="dropdown-content">{props.children}</div>
    </div>
  );
};
