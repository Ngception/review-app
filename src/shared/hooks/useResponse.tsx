import { useContext } from 'react';
import { IResponseContext, ResponseContext } from '../context';

export const useResponse = () => {
  return useContext(ResponseContext) as IResponseContext;
};
