// articleState.js
import { useState } from "react";

const useArticleState = () => {
  const [articles, setArticles] = useState([]);

  return { articles, setArticles };
};

export default useArticleState;
