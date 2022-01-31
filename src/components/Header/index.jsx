import { HeaderComponent, PhotoProfile } from "./styles";
import Title from "../../images/title.svg";
import LogoSmall from "../../images/logo-small.svg";
import Perfil from "../../images/perfil.png";

const Header = ({ photo }) => {
  return (
    <HeaderComponent>
      <PhotoProfile to="/profile/posts">
        <picture className="Perfil">
          <img src={photo} alt="" />
        </picture>
      </PhotoProfile>
      <img src={LogoSmall} alt="" className="LogoSmall" />
      <img src={Title} alt="" className="Title" />
    </HeaderComponent>
  );
};

export { Header };
