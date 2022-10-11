import { FC, useState } from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Icon
} from '../../../shared/ui/components';
import { useResponse } from '../../../shared/hooks';
import { Response } from '../../../shared/interfaces';
import { ResponseEdit } from '../Edit/ResponseEdit';
import styles from './ResponseItem.module.css';

interface ResponseItemProps {
  response: Response;
}

export const ResponseItem: FC<ResponseItemProps> = (
  props: ResponseItemProps
) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { state, setResponses } = useResponse();
  const formattedDate = new Date(
    props.response.published_at
  ).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

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
    <div className={styles['response-item']} data-testid="response-item">
      {isEditing ? (
        <ResponseEdit
          response={props.response}
          updateHandler={saveUpdatedResponse}
          cancelHandler={() => setIsEditing(false)}
        />
      ) : (
        <div
          data-testid="response-item-content"
          className={styles['response-item-content']}
        >
          <div className={styles['reply-button']}>
            <Button testId="reply-button" color="white">
              <Icon name="reply" color="link" />
            </Button>
          </div>
          <div className={styles['response-content-container']}>
            <p data-testid="response-content">{props.response.content}</p>
            <div className={styles['response-metadata']}>
              <p data-testid="response-author">{props.response.author}</p>
              <p
                className={styles['response-published-at']}
                data-testid="response-published-at"
              >
                {formattedDate}
              </p>
            </div>
          </div>
          <div className={styles['actions-button']}>
            <Dropdown
              align="right"
              triggerIcon="ellipsis"
              triggerColor="white"
              triggerIconColor="link"
              triggerAriaLabel={`Actions for response by ${props.response.author} on ${props.response.published_at}`}
            >
              <DropdownMenu>
                <DropdownItem onClick={() => setIsEditing(true)}>
                  Edit
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      )}
    </div>
  );
};
