import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./Context/ContextProvider";

ReactDOM.render(
  <ContextProvider>
    <App />,
  </ContextProvider>,
  document.getElementById("root")
);
