import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { GeneralError } from './General/GeneralError';
import { useError } from './state/hook/useError';

interface ErrorProps {}

export const Error: FC<ErrorProps> = (props: ErrorProps) => {
  const { state } = useError();
  const [errorStatus, setErrorStatus] = useState<number>(state.status);

  useEffect(() => {
    setErrorStatus(state.status);
  }, [state.status]);

  const renderError = () => {
    switch (errorStatus) {
      default:
        return <GeneralError />;
    }
  };

  return !state.status ? <Outlet></Outlet> : renderError();
};
