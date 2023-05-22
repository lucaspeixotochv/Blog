import Home from "./src/pages/Home/Home";
import Register from "./src/pages/Register/index";
import useArticleState from "./src/mocks/articles";

function App() {
  const { articles, setArticles } = useArticleState();

  return (
    <>
      <Home articles={articles} setArticles={setArticles} />
      <Register articles={articles} setArticles={setArticles} />
    </>
  );
}

export default App;
