import { Config } from "../pages/config";
import { Home } from "../pages/home";
import { Profile } from "../pages/profile";
const routes = [
  {
    path: "/config",
    Component: Config,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/profile/*",
    Component: Profile,
  },
];

export { routes };
