import React from "react";
// import ReactDOM from "react-dom/client";
import { render } from "react-dom"; // <- This is the correct import // statement for React version 17
import App from "./App";

// const root = render.createRoot(document.getElementById("root"));
const root = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  root
);
// root.render(<App />);
