import React from "react";
import { createRoot } from "react-dom";
import App from "./components/App";

const root_react = createRoot(document.getElementById("root"));
root_react.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
