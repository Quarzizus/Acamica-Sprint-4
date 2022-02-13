import { WelcomeComponent, InputUserName } from "./styles";
import { Box } from "../Box";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { colors } from "../Box/utils/colors";
import { Link } from "react-router-dom";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

const Welcome = () => {
  const {
    state: {
      userData: { uid },
    },
  } = useContext(AppContext);
  const [colorsInfo, setColorsInfo] = useState(colors);
  const [username, setUsername] = useState("");
  const [color, setColor] = useState("#F50D5A");
  const db = getFirestore();

  const handleSubmit = async () => {
    const reference = doc(db, "users", uid);
    await updateDoc(reference, {
      color: color,
      username: username,
    });
  };

  const handleSelect = (id) => {
    const newColors = colors.map((box) => {
      if (box.id === id) {
        box.select = true;
        setColor(box.color);
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
      <Link to="/home" onClick={handleSubmit}>
        <button>CONTINUE</button>
      </Link>
    </WelcomeComponent>
  );
};

export { Welcome };
