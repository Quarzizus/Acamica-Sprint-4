import { WelcomeComponent } from "./styles";
import { Box } from "../Box";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { colors } from "../Box/utils/colors";

const Welcome = () => {
  const {
    state: { name, color },
    dispatch,
  } = useContext(AppContext);
  const [colorsInfo, setColorsInfo] = useState(colors);

  const handleSelect = (id) => {
    const newColors = colors.map((box) => {
      if (box.id === id) {
        box.select = true;
        dispatch({
          type: "SET_COLOR",
          payload: box.color,
        });
        localStorage.setItem("color", box.color);
        return box;
      } else {
        box.select = false;
        return box;
      }
    });
    setColorsInfo(newColors);
  };

  return (
    <WelcomeComponent color={color}>
      <h2>
        Welcome
        <br />
        <span>{name}!</span>
      </h2>
      <p>Select your favorite</p>
      <section>
        {colorsInfo.map((box) => {
          return <Box key={box.id} handleSelect={handleSelect} {...box} />;
        })}
      </section>
      <button>CONTINUE</button>
    </WelcomeComponent>
  );
};

export { Welcome };
