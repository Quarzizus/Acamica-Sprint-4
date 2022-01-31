import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { app } from "../../firebaseconfig";

const db = getFirestore(app);

const handleToogleLike = async (id, uid, followers) => {
  const reference = doc(db, "tweets", id);
  const isMyFavorite = followers.some((follower) => follower === uid);
  if (isMyFavorite) {
    const [uid, ...rest] = followers;
    await updateDoc(reference, {
      followers: [...rest],
    });
  } else {
    await updateDoc(reference, {
      followers: [...followers, uid],
    });
  }
};
export { handleToogleLike };
