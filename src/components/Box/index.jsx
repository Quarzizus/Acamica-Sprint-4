import { BoxComponent } from "./styles";

const Box = ({color, select}) => {
  return <BoxComponent bagColor={color} select={select}></BoxComponent>;
};

export { Box };
