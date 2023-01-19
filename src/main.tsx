import ReactDOM from "react-dom/client";
import React from "react";
import Pagehome from "./pages/PageHome";
import axios from "axios";

import App from "./routes";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
