import { ListOfPhotoTweets } from "../../containers/ListOfTweets";
import { HomePage } from "../home/styles";
import { HeaderProfile } from "./Header";

const Profile = () => {
  return (
    <HomePage>
      <HeaderProfile />
      <ListOfPhotoTweets />
    </HomePage>
  );
};

export { Profile };
