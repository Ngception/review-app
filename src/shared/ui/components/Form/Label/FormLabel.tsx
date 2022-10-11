import { FC, ReactNode } from 'react';

interface FormLabelProps {
  children: ReactNode;
  for: string;
  testId?: string;
}

export const FormLabel: FC<FormLabelProps> = (props: FormLabelProps) => {
  return (
    <label
      data-testid={props.testId || 'form-label'}
      className="label"
      htmlFor={props.for}
    >
      {props.children}
    </label>
  );
};
