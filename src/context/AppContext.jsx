import { createContext } from "react";
import { AppReducer, INITIAL_STATE } from "../reducers";
import { useReducer } from "react";

const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider, AppContext };
