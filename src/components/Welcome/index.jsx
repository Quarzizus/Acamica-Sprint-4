import { WelcomeComponent } from "./styles";
import { Box } from "../Box";

const Welcome = () => {
  return (
    <WelcomeComponent>
      <h2>
        Welcome
        <br />
        <span>Name!</span>
      </h2>
      <p>Select your favorite</p>
      <section>
        {[0, 1, 2, 3, 4, 5].map((box) => {
          return <Box />;
        })}
      </section>
      <button>CONTINUE</button>
    </WelcomeComponent>
  );
};

export { Welcome };
