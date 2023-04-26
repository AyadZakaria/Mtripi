import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PopupProvider } from "./contexts/PopupContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PopupProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PopupProvider>
  </React.StrictMode>
);
