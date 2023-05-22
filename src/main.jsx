import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyle } from "./GlobalStyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
