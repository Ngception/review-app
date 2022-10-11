import { FC, ReactNode } from 'react';

interface FormControlProps {
  children: ReactNode;
}

export const FormControl: FC<FormControlProps> = (props: FormControlProps) => {
  return <div className="control">{props.children}</div>;
};
