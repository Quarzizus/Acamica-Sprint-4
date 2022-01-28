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
        const userData = {
          uid: data.user.uid,
          email: data.user.email,
          name: data.user.displayName,
          photo: data.user.photoURL,
        };
        dispatch({
          type: "SET_USERDATA",
          payload: userData,
        });
        localStorage.setItem("uid", data.user.uid);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("name", data.user.displayName);
        localStorage.setItem("name", data.user.photoURL);
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
