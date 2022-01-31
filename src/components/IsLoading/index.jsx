import { IsEmptyComponent } from "../IsEmpty/styles";
import Icon from "../../images/empty.svg";

const IsLoading = ({ message }) => {
  return (
    <IsEmptyComponent>
      <img src={Icon} alt="empty" />
      <h2>{message}</h2>
    </IsEmptyComponent>
  );
};

export { IsLoading };
