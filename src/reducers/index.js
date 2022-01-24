const INITIAL_STATE = {
  uid: "",
  loading: "",
  error: "",
  email: "",
  color: "",
  name: "",
};

const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_UID":
      return {
        ...state,
        uid: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export { AppReducer, INITIAL_STATE };
