import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages";
import "./styles/index.css";
import Register from "./pages/Register";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>
);
