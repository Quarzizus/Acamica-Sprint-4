import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { AuthPage, LogoComponent } from "../auth/styles";
import Logo from "../../images/logo.svg";

const Config = () => {
  const {
    state: { name, uid, email },
  } = useContext(AppContext);

  return (
    <AuthPage>
      <LogoComponent>
        <img src={Logo} alt="" />
      </LogoComponent>
    </AuthPage>
  );
};

export { Config };