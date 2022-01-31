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
  open: false,
  tweetForDelete: "",
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
    case "DELETE_USERDATA":
      return {
        ...state,
        userData: INITIAL_STATE.userData,
      };
    case "SET_UID":
      return {
        ...state,
        userData: {
          ...state.userData,
          uid: action.payload,
        },
      };
    case "SET_OPEN":
      return {
        ...state,
        open: action.payload,
      };
    case "SET_TWEET_FOR_DELETE":
      return {
        ...state,
        tweetForDelete: action.payload,
      };
    default:
      return state;
  }
};

export { AppReducer, INITIAL_STATE };
