import { createContext } from "react";
import { AppReducer } from "../reducers";
import { useReducer } from "react";
import { getLocalStorage } from "../utils/getLocalStorage";
import { getFirestore, onSnapshot, collection } from "firebase/firestore";
const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const db = getFirestore();

  const INITIAL_STATE = {
    userData: {
      uid: getLocalStorage("uid"),
      email: getLocalStorage("email"),
      color: getLocalStorage("color"),
      name: getLocalStorage("name"),
      username: getLocalStorage("username"),
      photo: getLocalStorage("photo"),
    },
    loading: true,
    error: null,
    tweets: [],
  };
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);
  const getTweetsWithSuscription = () => {
    try {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });
      onSnapshot(collection(db, "/tweets"), (docs) => {
        const res = [];
        docs.forEach((doc) => {
          res.push(doc.data());
        });
        dispatch({
          type: "GET_TWEETS",
          payload: res.reverse(),
        });
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const value = { state, dispatch, getTweetsWithSuscription };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider, AppContext };
