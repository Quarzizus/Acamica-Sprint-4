import { HeroComponent, ButtonSignInGoogle } from "./styles";
import Icon from "../../images/google-icon.svg";
const Hero = () => {
  return (
    <HeroComponent>
      <h1>
        LOREM <br />
        IPSUM DOLOR
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <ButtonSignInGoogle>
        <picture>
          <img src={Icon} alt="" />
        </picture>
        <div>Sign in With Google</div>
      </ButtonSignInGoogle>
    </HeroComponent>
  );
};

export { Hero };
