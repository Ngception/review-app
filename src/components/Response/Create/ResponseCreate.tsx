import { ChangeEvent, FC, FormEvent, useState } from 'react';
import * as uuid from 'uuid';
import { useResponse } from '../../../shared/hooks';
import {
  Button,
  FormControl,
  FormField,
  FormInput,
  FormLabel,
  FormTextArea
} from '../../../shared/ui/components';

interface ResponseCreateProps {
  reviewId: string;
}

export const ResponseCreate: FC<ResponseCreateProps> = (
  props: ResponseCreateProps
) => {
  const [content, setContent] = useState<string>('');
  const [name, setName] = useState<string>('');
  const { addResponse } = useResponse();

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();

    setContent(event.target.value);
  };

  const handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setName(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!name || !content) {
      return;
    }

    const data = {
      id: uuid.v4(),
      author: name,
      content,
      review_id: props.reviewId,
      published_at: new Date().toString()
    };

    addResponse(data);
    setContent('');
    setName('');

    return;
  };

  return (
    <div data-testid="response-create">
      <form data-testid="response-create-form" onSubmit={handleSubmit}>
        <h2>Post a response</h2>
        <FormField>
          <FormLabel for="name">Name</FormLabel>
          <FormControl>
            <FormInput
              id="name"
              type="text"
              name="name"
              onChange={handleUserChange}
              value={name}
            />
          </FormControl>
        </FormField>
        <FormField>
          <FormLabel for="content">Content</FormLabel>
          <FormControl>
            <FormTextArea
              id="content"
              name="content"
              onChange={handleContentChange}
              value={content}
            />
          </FormControl>
        </FormField>
        <Button
          color="primary"
          disabled={!name || !content}
          type="submit"
          testId="submit-button"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
