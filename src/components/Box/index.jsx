import { BoxComponent } from "./styles";

const Box = ({ color, select, id, handleSelect }) => {
  return (
    <BoxComponent
      onClick={() => {
        handleSelect(id);
      }}
      bagColor={color}
      select={select}
    ></BoxComponent>
  );
};

export { Box };
