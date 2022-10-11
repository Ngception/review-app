import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Response } from '../../../shared/interfaces';
import {
  Button,
  FormControl,
  FormField,
  FormLabel,
  FormTextArea
} from '../../../shared/ui/components';

interface ResponseEditProps {
  response: Response;
  updateHandler: (response: Response) => void;
  cancelHandler: () => void;
}

export const ResponseEdit: FC<ResponseEditProps> = (
  props: ResponseEditProps
) => {
  const [updatedContent, setUpdatedContent] = useState<string>(
    props.response.content
  );

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();

    setUpdatedContent(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!updatedContent) {
      return;
    }

    props.updateHandler({
      ...props.response,
      content: updatedContent,
      published_at: new Date().toString()
    });
  };

  return (
    <div data-testid="response-edit">
      <form data-testid="response-edit-form" onSubmit={handleSubmit}>
        <FormField>
          <FormLabel for="content">
            <h2>Content</h2>
          </FormLabel>
          <FormControl>
            <FormTextArea
              name="content"
              id="content"
              value={updatedContent}
              onChange={handleChange}
            />
          </FormControl>
        </FormField>
        <FormField group={true}>
          <FormControl>
            <Button
              testId="update-button"
              type="submit"
              color="primary"
              disabled={!updatedContent}
            >
              Update
            </Button>
          </FormControl>
          <FormControl>
            <Button
              testId="cancel-button"
              type="button"
              onClick={() => props.cancelHandler()}
            >
              Cancel
            </Button>
          </FormControl>
        </FormField>
      </form>
    </div>
  );
};
