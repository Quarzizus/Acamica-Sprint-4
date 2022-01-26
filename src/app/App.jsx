import { routes } from "../routes";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Auth } from "../pages/auth";
import { NotFound } from "../components/NotFound";

const App = () => {
  const {
    state: { uid },
  } = useContext(AppContext);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />} />
          {uid &&
            routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
