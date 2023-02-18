import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { ProductProvider } from "./context/Context";
import { QuestionProvider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QuestionProvider>
    <App />
  </QuestionProvider>
);

reportWebVitals();
