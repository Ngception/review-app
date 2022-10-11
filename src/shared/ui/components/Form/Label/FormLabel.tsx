import { FC, ReactNode } from 'react';

interface FormLabelProps {
  children: ReactNode;
  for: string;
}

export const FormLabel: FC<FormLabelProps> = (props: FormLabelProps) => {
  return (
    <label className="label" htmlFor={props.for}>
      {props.children}
    </label>
  );
};
