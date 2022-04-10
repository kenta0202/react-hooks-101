import * as ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import RoutesConfig from "./RoutesConfig";
const container = document.getElementById("root") as HTMLElement;
// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <RoutesConfig />
  </React.StrictMode>
);
