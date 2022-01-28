import { UserNameComponent } from "./styles";

const UserName = ({
  className = "",
  username = "username",
  color = "#FFF",
}) => {
  return (
    <UserNameComponent color={color} className={className}>
      <p className="UserNameText">{username}</p>
      <div></div>
    </UserNameComponent>
  );
};

export { UserName };
