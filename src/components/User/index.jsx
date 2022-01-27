import { FooterUser, UserComponent } from "./styles";
import Perfil from "../../images/perfil.png";
import { UserName } from "../UserName";

const User = () => {
  const handleChangeBg = (node, sibling) => {
    sibling.classList.remove("Active");
    sibling.classList.add("NoActive");
    node.classList.remove("NoActive");
    node.classList.add("Active");
  };

  return (
    <UserComponent>
      <div className="User_container">
        <picture>
          <img src={Perfil} alt="" />
        </picture>
        <UserName className="User" />
      </div>
      <FooterUser>
        <button
          className="Active"
          onClick={(e) => {
            handleChangeBg(e.target, e.target.nextSibling);
          }}
        >
          POSTS
        </button>
        <button
          className="NoActive"
          onClick={(e) => {
            handleChangeBg(e.target, e.target.previousSibling);
          }}
        >
          FAVORITES
        </button>
      </FooterUser>
    </UserComponent>
  );
};

export { User };
