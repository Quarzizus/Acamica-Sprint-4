const INITIAL_STATE = {
  userData: {
    color: "#F50D5A",
    email: "",
    photo: "",
    uid: "",
    username: "",
    name: "",
  },
  loading: "",
  error: "",
  tweets: [],
};

const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USERDATA":
      return {
        ...state,
        userData: { ...state.userData, ...action.payload },
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
        userData: {
          ...state.userData,
          color: action.payload,
        },
      };
    case "SET_USERNAME":
      return {
        ...state,
        userData: {
          ...state.userData,
          username: action.payload,
        },
      };

    case "GET_TWEETS":
      return {
        ...state,
        tweets: action.payload,
      };
    default:
      return state;
  }
};

export { AppReducer, INITIAL_STATE };
