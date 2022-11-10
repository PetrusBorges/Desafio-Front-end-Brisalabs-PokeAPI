import React from "react";
import { createRoot } from "react-dom/client"

//components
import App from "./components/App";

const root = createRoot(document.querySelector('#root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)