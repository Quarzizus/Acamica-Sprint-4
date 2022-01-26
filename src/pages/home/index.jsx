import { useContext } from "react";
import { Header } from "../../components/Header";
import { AppContext } from "../../context/AppContext";
import { HomePage } from "./styles";

const Home = () => {
  const {
    state: { email, name, color, uid },
  } = useContext(AppContext);
  return (
    <HomePage>
      <Header />
    </HomePage>
  );
};

export { Home };
