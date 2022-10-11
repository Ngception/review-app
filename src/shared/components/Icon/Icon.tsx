import { FC } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
  name: IconName;
}

export const Icon: FC<IconProps> = (props: IconProps) => {
  return (
    <span data-testid="icon">
      <FontAwesomeIcon icon={['fas', props.name]} />
    </span>
  );
};
