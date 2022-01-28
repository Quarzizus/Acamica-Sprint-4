import { WelcomeComponent, InputUserName } from "./styles";
import { Box } from "../Box";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { colors } from "../Box/utils/colors";
import { Link } from "react-router-dom";

const Welcome = () => {
  const {
    state: {
      userData: { color },
    },
    dispatch,
  } = useContext(AppContext);
  const [colorsInfo, setColorsInfo] = useState(colors);
  const [username, setUsername] = useState("");
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
        <span>{username}!</span>
      </h2>
      <InputUserName
        type="text"
        placeholder="Type your username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <p>Select your favorite</p>
      <section>
        {colorsInfo.map((box) => {
          return <Box key={box.id} handleSelect={handleSelect} {...box} />;
        })}
      </section>
      <Link
        to="/home"
        onClick={() => {
          dispatch({
            type: "SET_USERNAME",
            payload: username,
          });
        }}
      >
        <button>CONTINUE</button>
      </Link>
    </WelcomeComponent>
  );
};

export { Welcome };
