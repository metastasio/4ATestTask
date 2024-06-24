import { useContext } from 'react';
import { TimerContext } from './contextProvider';

export const useTimerContext = () => useContext(TimerContext);
