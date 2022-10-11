import { FC } from 'react';
import { useResponse } from '../../shared/hooks';
import { ResponseCreate, ResponseList } from '../../components/Response';
import { Card } from '../../shared/ui/components';
import styles from './ResponseContainer.module.css';

interface ResponseContainerProps {
  reviewId: string;
}

export const ResponseContainer: FC<ResponseContainerProps> = (
  props: ResponseContainerProps
) => {
  const { state } = useResponse();

  return (
    <div data-testid="response-container">
      <ResponseList
        responses={state.responses.filter(
          (response) => response.review_id === props.reviewId
        )}
      />
      {state.responses.some(
        (response) => response.review_id === props.reviewId
      ) ? null : (
        <div className={styles['response-create-card']}>
          <Card>
            <div className={styles['response-create-component']}>
              <ResponseCreate reviewId={props.reviewId} />
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
