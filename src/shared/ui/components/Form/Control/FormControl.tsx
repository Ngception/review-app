import { FC, ReactNode } from 'react';

interface FormControlProps {
  children: ReactNode;
  testId?: string;
}

export const FormControl: FC<FormControlProps> = (props: FormControlProps) => {
  return (
    <div data-testid={props.testId || 'form-control'} className="control">
      {props.children}
    </div>
  );
};
