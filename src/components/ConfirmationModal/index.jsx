import { useContext } from "react";
import { createPortal } from "react-dom";
import { AppContext } from "../../context/AppContext";
import { ConfirmationModalComponent, DeleteCard } from "./styles";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";

const ConfirmationModal = () => {
  const db = getFirestore();
  const {
    dispatch,
    state: { tweetForDelete },
  } = useContext(AppContext);

  const handleClose = () => {
    dispatch({
      type: "SET_TWEET_FOR_DELETE",
      payload: "",
    });
    dispatch({
      type: "SET_OPEN",
      payload: false,
    });
  };

  const handleDeleteTweet = async () => {
    await deleteDoc(doc(db, "tweets", tweetForDelete));
    dispatch({
      type: "SET_OPEN",
      payload: false,
    });
  };

  return createPortal(
    <ConfirmationModalComponent>
      <DeleteCard>
        <header>
          <button onClick={handleClose}>X</button>
        </header>
        <section>
          <h2>Are you sure you want delete this tweet?</h2>
        </section>
        <footer>
          <button className="ButtonDelete" onClick={handleDeleteTweet}>
            Delete
          </button>
          <button onClick={handleClose}>Cancel</button>
        </footer>
      </DeleteCard>
    </ConfirmationModalComponent>,
    document.getElementById("portal")
  );
};

export { ConfirmationModal };
