import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Response } from '../../../shared/interfaces';

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        <label htmlFor="content">Content</label>
        <input
          data-testid="content-input"
          type="text"
          name="content"
          id="content"
          value={updatedContent}
          onChange={handleChange}
        />
        <button
          data-testid="update-button"
          type="submit"
          disabled={!updatedContent}
        >
          Update
        </button>
        <button
          data-testid="cancel-button"
          type="button"
          onClick={() => props.cancelHandler()}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
