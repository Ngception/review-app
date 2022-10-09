import { ChangeEvent, FC, FormEvent, useState } from 'react';
import * as uuid from 'uuid';
import { useResponse } from '../../../shared/hooks';

interface ResponseCreateProps {
  reviewId: string;
}

export const ResponseCreate: FC<ResponseCreateProps> = (
  props: ResponseCreateProps
) => {
  const [content, setContent] = useState<string>('');
  const [name, setName] = useState<string>('');
  const { addResponse } = useResponse();

  const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setContent(event.target.value);
  };

  const handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setName(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      id: uuid.v4(),
      author: name,
      content,
      review_id: props.reviewId,
      published_at: new Date().toString()
    };

    addResponse(data);

    return;
  };

  return (
    <div data-testid="response-create">
      <form onSubmit={handleSubmit}>
        <h3>Post a response</h3>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleUserChange}
          value={name}
        />
        <label htmlFor="content">Content</label>
        <input
          id="content"
          type="text"
          name="content"
          onChange={handleContentChange}
          value={content}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
