import { Main } from './Components/Main/Main';
import { TimerContextProvider } from './context/contextProvider';

// export type Context = {
//   isExpiring: boolean;
//   setExpiring: Dispatch<SetStateAction<boolean>>;
// };

// export const TimerContext = createContext<Context | null>(null);

function App() {
  // const [isExpiring, setExpiring] = useState(false);

  return (
    // <TimerContext.Provider value={{ isExpiring, setExpiring }}>
    <TimerContextProvider>
      <Main />
    </TimerContextProvider>

    // </TimerContext.Provider>
  );
}

export default App;
