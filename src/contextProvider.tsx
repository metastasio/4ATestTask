import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type Context = {
  isExpiring: boolean;
  setExpiring: Dispatch<SetStateAction<boolean>>;
};

export const TimerContext = createContext<Context | null>(null);

export const TimerContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isExpiring, setExpiring] = useState(false);

  return (
    <TimerContext.Provider value={{ isExpiring, setExpiring }}>
      {children}
    </TimerContext.Provider>
  );
};


