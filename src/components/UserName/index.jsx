import { UserNameComponent } from "./styles";

const UserName = ({ className = "", username = "username" }) => {
  return (
    <UserNameComponent className={className}>
      <p className="UserNameText">{username}</p>
      <div></div>
    </UserNameComponent>
  );
};

export { UserName };
