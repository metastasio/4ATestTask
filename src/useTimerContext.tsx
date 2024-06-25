import { useContext } from 'react';
import { TimerContext } from './contextProvider';

export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('Context must be provided');
  }
  return context;
};
