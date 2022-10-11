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
  triggerAriaLabel?: string;
  align?: 'left' | 'right';
  testId?: string;
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
      data-testid={props.testId || 'dropdown'}
      ref={dropdownRef}
      className={setClasses()}
      onClick={() => setShowContent(!showContent)}
    >
      <div className="is-sr-only" aria-live="polite">
        {showContent && <p>Menu expanded</p>}
        {!showContent && <p>Menu collapsed</p>}
      </div>
      <DropdownTrigger
        color={props.triggerColor}
        ariaLabel={props.triggerAriaLabel || undefined}
      >
        {props.triggerText}{' '}
        {props.triggerIcon && (
          <Icon name={props.triggerIcon} color={props.triggerIconColor} />
        )}
      </DropdownTrigger>
      <div onBlur={() => setShowContent(!showContent)}>{props.children}</div>
    </div>
  );
};
