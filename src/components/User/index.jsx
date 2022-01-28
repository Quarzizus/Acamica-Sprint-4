import { FooterUser, UserComponent } from "./styles";
import Perfil from "../../images/perfil.png";
import { UserName } from "../UserName";

const User = ({ photo, color, username }) => {
  const handleChangeBg = (node, sibling) => {
    sibling.classList.remove("Active");
    sibling.classList.add("NoActive");
    node.classList.remove("NoActive");
    node.classList.add("Active");
  };

  return (
    <UserComponent color={color}>
      <div className="User_container">
        <picture>
          <img src={photo} alt="" />
        </picture>
        <UserName className="User" username={username} color={color} />
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
