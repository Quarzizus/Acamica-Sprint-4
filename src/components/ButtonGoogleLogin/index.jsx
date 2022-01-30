import { ButtonSignInGoogle } from "./styles";
import Icon from "../../images/google-icon.svg";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const ButtonGoogleLogin = () => {
  const auth = getAuth();
  const db = getFirestore();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const setUserInDb = (data) => {
    const userData = {
      uid: data.user.uid,
      email: data.user.email,
      name: data.user.displayName,
      photo: data.user.photoURL,
    };
    localStorage.setItem("uid", data.user.uid);
    setDoc(doc(db, "users", data.user.uid), userData);
    navigate("/config");
  };
  const redirectHome = async (uid) => {
    const reference = doc(db, "users", uid);
    const response = await getDoc(reference);
    response.exists() && localStorage.setItem("uid", uid);
    return response.exists();
  };

  const handleAuth = async () => {
    try {
      await signInWithPopup(auth, provider).then((data) => {
        redirectHome(data.user.uid).then((res) => {
          res ? navigate("/home") : setUserInDb(data);
        });
      });
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
