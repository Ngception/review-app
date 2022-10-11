import { FC, ReactNode } from 'react';

interface DropdownMenuProps {
  children: ReactNode;
}

export const DropdownMenu: FC<DropdownMenuProps> = (
  props: DropdownMenuProps
) => {
  return (
    <div className="dropdown-menu" id="dropdown-menu" role="menu">
      <div className="dropdown-content">{props.children}</div>
    </div>
  );
};
