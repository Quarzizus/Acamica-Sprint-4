import { HeaderComponent } from "./styles";
import Title from "../../images/title.svg";
import LogoSmall from "../../images/logo-small.svg";
import Perfil from "../../images/perfil.png";

const Header = () => {
  return (
    <HeaderComponent>
      <picture className="Perfil">
        <img src={Perfil} alt="" />
      </picture>
      <img src={LogoSmall} alt="" className="LogoSmall" />
      <img src={Title} alt="" className="Title" />
    </HeaderComponent>
  );
};

export { Header };
