import { HeroComponent } from "./styles";
import { ButtonGoogleLogin } from "../ButtonGoogleLogin";
const Hero = () => {
  return (
    <HeroComponent>
      <h1>
        LOREM <br />
        IPSUM DOLOR
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <ButtonGoogleLogin />
    </HeroComponent>
  );
};

export { Hero };
