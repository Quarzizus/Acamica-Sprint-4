import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "../firebaseconfig";
import "./index.css";
import { ContextProvider } from "./context/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
