import ReactDOM from "react-dom/client";
import Pagehome from "./pages/PageHome";
import store from "./utils/redux/store/store";

import App from "./routes";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
