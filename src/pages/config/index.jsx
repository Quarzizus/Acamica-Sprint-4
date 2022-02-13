import { AuthPage, LogoComponent } from "../auth/styles";
import Logo from "../../images/logo.svg";
import { Welcome } from "../../components/Welcome";

const Config = () => {
  return (
    <AuthPage>
      <LogoComponent>
        <img src={Logo} alt="" />
      </LogoComponent>
      <Welcome />
    </AuthPage>
  );
};

export { Config };
