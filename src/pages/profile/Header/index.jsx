import { ButtonLogout, HeaderProfileComponent } from "./styles";
import BackIcon from "../../../images/back.svg";
import LogoutIcon from "../../../images/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";

const HeaderProfile = ({ username }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HeaderProfileComponent>
      <div className="HeaderProfile_container">
        <Link to="/home">
          <img src={BackIcon} alt="" />
        </Link>
        <p>{username}</p>
      </div>
      <ButtonLogout onClick={handleLogout}>
        LOGOUT
        <img src={LogoutIcon} alt="" />
      </ButtonLogout>
    </HeaderProfileComponent>
  );
};

export { HeaderProfile };
