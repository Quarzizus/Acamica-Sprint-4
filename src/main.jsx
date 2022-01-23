import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "../firebaseconfig";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
