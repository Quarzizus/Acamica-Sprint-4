import { ButtonSignInGoogle } from "./styles";
import Icon from "../../images/google-icon.svg";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const ButtonGoogleLogin = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);
  const handleAuth = async () => {
    try {
      await signInWithPopup(auth, provider).then((data) => {
        dispatch({
          type: "SET_UID",
          payload: data.user.uid,
        });
        localStorage.setItem("uid", data.user.uid);
        dispatch({
          type: "SET_EMAIL",
          payload: data.user.email,
        });
        localStorage.setItem("email", data.user.email);
        dispatch({
          type: "SET_NAME",
          payload: data.user.displayName,
        });
        localStorage.setItem("name", data.user.displayName);
      });
      navigate("/config");
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error,
      });
    }
  };
  return (
    <ButtonSignInGoogle onClick={handleAuth}>
      <picture>
        <img src={Icon} alt="" />
      </picture>
      <div>Sign in With Google</div>
    </ButtonSignInGoogle>
  );
};

export { ButtonGoogleLogin };
