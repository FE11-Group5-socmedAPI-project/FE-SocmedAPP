import React from "react";
import ReactDOM from "react-dom/client";
//import { Provider } from "react-redux";
//import DetailMovie from "./pages/DetailMovie";
//import Home from "./pages/Home";
import Register from "./pages/Register";

//import axios from "axios";
import store from "./utils/redux/store/store";
import App from "./routes";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <>
  //  <Register />
  //  </>
);
