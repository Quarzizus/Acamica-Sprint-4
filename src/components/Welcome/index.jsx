import { WelcomeComponent } from "./styles";
import { Box } from "../Box";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { colors } from "../Box/utils/colors"

const Welcome = () => {
  const {state: {name}} = useContext(AppContext)
  return (
    <WelcomeComponent>
      <h2>
        Welcome
        <br />
        <span>{name}!</span>
      </h2>
      <p>Select your favorite</p>
      <section>
        {colors.map((box) => {
          return <Box key={box.id} {...box}/>;
        })}
      </section>
      <button>CONTINUE</button>
    </WelcomeComponent>
  );
};

export { Welcome };
