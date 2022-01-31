import { IsEmptyComponent } from "./styles";
import Icon from "../../images/empty.svg";

const IsEmpty = ({ message }) => {
  return (
    <IsEmptyComponent>
      <img src={Icon} alt="empty" />
      <h2>{message}</h2>
    </IsEmptyComponent>
  );
};

export { IsEmpty };
