import { FC, ReactNode } from 'react';

interface FormFieldProps {
  children: ReactNode;
  group?: boolean;
  testId?: string;
}

export const FormField: FC<FormFieldProps> = (props: FormFieldProps) => {
  const setClasses = () => {
    let classes = 'field';

    if (props.group) {
      classes += ' is-grouped';
    }

    return classes;
  };

  return (
    <div data-testid={props.testId || 'form-field'} className={setClasses()}>
      {props.children}
    </div>
  );
};
