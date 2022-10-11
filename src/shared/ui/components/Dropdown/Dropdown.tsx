import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Icon } from '../Icon/Icon';
import { DropdownTrigger } from './Trigger/DropdownTrigger';
import 'bulma/css/bulma.min.css';

interface DropdownProps {
  children: ReactNode;
  triggerText?: string;
  triggerIcon?: IconName;
  triggerIconColor?: string;
  triggerColor?: string;
  align?: 'left' | 'right';
}

export const Dropdown: FC<DropdownProps> = (props: DropdownProps) => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const setClasses = () => {
    let classes = `dropdown`;

    if (props.align) {
      classes += ` is-${props.align}`;
    }

    if (showContent) {
      classes += ' is-active';
    }

    return classes;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setClickedOutsideDropdownListener = (event: any) => {
    if (!dropdownRef.current?.contains(event.target)) {
      setShowContent(false);
    }
  };

  useEffect(() => {
    if (showContent) {
      document.addEventListener('mousedown', setClickedOutsideDropdownListener);
    }

    return () => {
      document.removeEventListener(
        'mousedown',
        setClickedOutsideDropdownListener
      );
    };
  }, [showContent]);

  return (
    <div
      ref={dropdownRef}
      className={setClasses()}
      onClick={() => setShowContent(!showContent)}
    >
      <DropdownTrigger color={props.triggerColor}>
        {props.triggerText}{' '}
        {props.triggerIcon && (
          <Icon name={props.triggerIcon} color={props.triggerIconColor} />
        )}
      </DropdownTrigger>
      <div onBlur={() => setShowContent(!showContent)}>{props.children}</div>
    </div>
  );
};
