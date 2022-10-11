import { FC, ReactNode } from 'react';

interface FormFieldProps {
  children: ReactNode;
  group?: boolean;
}

export const FormField: FC<FormFieldProps> = (props: FormFieldProps) => {
  const setClasses = () => {
    let classes = 'field';

    if (props.group) {
      classes += ' is-grouped';
    }

    return classes;
  };

  return <div className={setClasses()}>{props.children}</div>;
};
