import { ChangeEvent, FC } from 'react';

interface FormTextAreaProps {
  name: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  testId?: string;
}

export const FormTextArea: FC<FormTextAreaProps> = (
  props: FormTextAreaProps
) => {
  return (
    <textarea
      className="textarea"
      data-testid={props.testId}
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
