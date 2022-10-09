import { FC } from 'react';
import { useResponse } from '../../shared/hooks';
import { ResponseList } from '../../components/Response';

interface ResponseContainerProps {
  reviewId: string;
}

export const ResponseContainer: FC<ResponseContainerProps> = (
  props: ResponseContainerProps
) => {
  const { state } = useResponse();

  return (
    <div data-testid="response-container">
      <h2>ResponseContainer works!</h2>
      <ResponseList responses={state.responses} />
    </div>
  );
};