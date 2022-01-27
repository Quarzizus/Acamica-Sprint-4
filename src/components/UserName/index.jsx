import { UserNameComponent } from "./styles";

const UserName = ({ className = "" }) => {
  return (
    <UserNameComponent className={className}>
      <p className="UserNameText">UserName</p>
      <div></div>
    </UserNameComponent>
  );
};

export { UserName };
