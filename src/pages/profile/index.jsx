import { User } from "../../components/User";
import { ListOfPhotoTweets } from "../../containers/ListOfTweets";
import { HomePage } from "../home/styles";
import { HeaderProfile } from "./Header";

const Profile = () => {
  return (
    <HomePage>
      <HeaderProfile />
      <User />
      <ListOfPhotoTweets />
    </HomePage>
  );
};

export { Profile };
