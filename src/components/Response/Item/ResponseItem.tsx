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
      <p>{props.response.author}</p>
      <p>{props.response.content}</p>
      <p>{props.response.published_at}</p>
      <p>{props.response.review_id}</p>
    </div>
  );
};
