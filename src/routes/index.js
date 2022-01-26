import { Config } from "../pages/config";
import { Home } from "../pages/home";
const routes = [
  {
    path: "/config",
    Component: Config,
  },
  {
    path: "/home",
    Component: Home,
  },
];

export { routes };
