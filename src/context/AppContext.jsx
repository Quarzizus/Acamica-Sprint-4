import { createContext, useEffect } from "react";
import { AppReducer } from "../reducers";
import { useReducer } from "react";
import { getLocalStorage } from "../utils/getLocalStorage";
import {
  getFirestore,
  onSnapshot,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";
const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const db = getFirestore();

  const INITIAL_STATE = {
    userData: {
      color: "",
      email: "",
      photo: "",
      uid: getLocalStorage("uid"),
      username: "",
      name: "",
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
  const getUserData = async (uid) => {
    const reference = doc(db, "users", uid);
    const userData = await getDoc(reference);

    dispatch({
      type: "SET_USERDATA",
      payload: userData.data(),
    });
  };

  const value = { state, dispatch, getTweetsWithSuscription, getUserData };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider, AppContext };
