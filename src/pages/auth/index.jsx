import { AuthPage, LogoComponent } from "./styles";
import { Hero } from "../../components/Hero";
import Logo from "../../images/logo.svg";

const Auth = () => {
  return (
    <AuthPage>
      <LogoComponent>
        <img src={Logo} alt="" />
      </LogoComponent>
      <Hero />
    </AuthPage>
  );
};

export { Auth };
