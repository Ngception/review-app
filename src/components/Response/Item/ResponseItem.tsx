import { FC } from 'react';
import { Response } from '../../../shared/interfaces';

interface ResponseItemProps {
  response: Response;
}

export const ResponseItem: FC<ResponseItemProps> = (
  props: ResponseItemProps
) => {
  return (
    <div data-testid="response-item">
      <p data-testid="response-author">{props.response.author}</p>
      <p data-testid="response-content">{props.response.content}</p>
      <p data-testid="response-published-at">{props.response.published_at}</p>
      <p data-testid="response-review-id">{props.response.review_id}</p>
    </div>
  );
};
