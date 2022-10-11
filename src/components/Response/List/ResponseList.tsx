import { FC } from 'react';
import { Card } from '../../../shared/ui/components';
import { Response } from '../../../shared/interfaces';
import { ResponseItem } from '../Item/ResponseItem';
import styles from './ResponseList.module.css';

interface ResponseListProps {
  responses: Response[];
}

export const ResponseList: FC<ResponseListProps> = (
  props: ResponseListProps
) => {
  return (
    <div data-testid="response-list">
      {props.responses.map((response) => (
        <div className={styles['response-item']} key={response.id}>
          <Card>
            <ResponseItem response={response} />
          </Card>
        </div>
      ))}
    </div>
  );
};
