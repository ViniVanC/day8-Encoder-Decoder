import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CoderProvider } from "./hook/useCoder";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoderProvider>
      <App />
    </CoderProvider>
  </React.StrictMode>
);
