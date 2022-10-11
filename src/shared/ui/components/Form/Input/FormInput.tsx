import { ChangeEvent, FC } from 'react';

interface FormInputProps {
  id: string;
  value: string;
  name?: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  testId?: string;
}

export const FormInput: FC<FormInputProps> = (props: FormInputProps) => {
  return (
    <input
      data-testid={props.testId || 'form-input'}
      className="input"
      id={props.id}
      value={props.value}
      type={props.type || 'text'}
      onChange={props.onChange}
    />
  );
};
