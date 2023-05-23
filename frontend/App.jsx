import Home from "./src/pages/Home/Home";
import Register from "./src/pages/Register/index";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={<Home articles={articles} setArticles={setArticles} />}
        />
        <Route
          path="/admin"
          element={<Register articles={articles} setArticles={setArticles} />}
        />
      </Routes>
    </>
  );
}

export default App;
