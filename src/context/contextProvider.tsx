import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type Status = 'active' | 'expiring' | 'ended';

type Context = {
  status: Status;
  setStatus: Dispatch<SetStateAction<Status>>;
};

export const TimerContext = createContext<Context | null>(null);

export const TimerContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [status, setStatus] = useState<Status>('active');

  return (
    <TimerContext.Provider value={{ status, setStatus }}>
      {children}
    </TimerContext.Provider>
  );
};
