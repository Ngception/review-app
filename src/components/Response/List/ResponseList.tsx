import { FC } from 'react';
import { Response } from '../../../shared/interfaces';
import { ResponseItem } from '../Item/ResponseItem';

interface ResponseListProps {
  responses: Response[];
}

export const ResponseList: FC<ResponseListProps> = (
  props: ResponseListProps
) => {
  return (
    <div data-testid="response-list">
      <h2>ResponseList works!</h2>
      {props.responses.map((response) => (
        <ResponseItem response={response} key={response.id} />
      ))}
    </div>
  );
};