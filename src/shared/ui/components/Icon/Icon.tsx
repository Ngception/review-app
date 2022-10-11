import { FC } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TEXT_COLORS } from '../../constants';

interface IconProps {
  name: IconName;
  color?: string;
}

export const Icon: FC<IconProps> = (props: IconProps) => {
  const setClasses = () => {
    let classes = '';

    if (props.color) {
      classes += ` ${TEXT_COLORS[props.color]}`;
    }

    return classes;
  };

  return (
    <span data-testid="icon" className={setClasses()}>
      <FontAwesomeIcon icon={['fas', props.name]} />
    </span>
  );
};
