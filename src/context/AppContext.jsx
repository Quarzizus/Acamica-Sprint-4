import { createContext } from "react";
import { AppReducer } from "../reducers";
import { useReducer } from "react";
import { getLocalStorage } from "../utils/getLocalStorage";

const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    uid: getLocalStorage("uid"),
    loading: "",
    error: "",
    email: getLocalStorage("email"),
    color: getLocalStorage("color"),
    name: getLocalStorage("name"),
  };
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider, AppContext };
