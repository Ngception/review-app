import { FC, useState } from 'react';
import { useResponse } from '../../../shared/hooks';
import { Response } from '../../../shared/interfaces';
import { ResponseEdit } from '../Edit/ResponseEdit';

interface ResponseItemProps {
  response: Response;
}

export const ResponseItem: FC<ResponseItemProps> = (
  props: ResponseItemProps
) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { state, setResponses } = useResponse();

  const saveUpdatedResponse = (updatedResponse: Response) => {
    const _responses = state.responses;

    for (let i = 0; i < _responses.length; i++) {
      const currentResponse = _responses[i];

      if (currentResponse.id === updatedResponse.id) {
        _responses[i] = updatedResponse;

        setIsEditing(false);
        setResponses(_responses);

        return;
      }
    }
  };

  return (
    <div data-testid="response-item">
      {isEditing ? (
        <ResponseEdit
          response={props.response}
          updateHandler={saveUpdatedResponse}
          cancelHandler={() => setIsEditing(false)}
        />
      ) : (
        <div data-testid="response-item-content">
          <button data-testid="reply-button" type="button">
            Reply
          </button>
          <p data-testid="response-author">{props.response.author}</p>
          <p data-testid="response-content">{props.response.content}</p>
          <p data-testid="response-published-at">
            {props.response.published_at}
          </p>
          <p data-testid="response-review-id">{props.response.review_id}</p>
          <button
            data-testid="edit-button"
            type="button"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};
