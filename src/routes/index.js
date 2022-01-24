import { Auth } from "../pages/auth";
import { Config } from "../pages/config";
const routes = [
  {
    path: "/",
    Component: Auth,
  },
  {
    path: "/config",
    Component: Config,
  },
];

export { routes };
