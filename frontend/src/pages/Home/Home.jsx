import { useEffect, useState } from "react";
import axios from "axios";
import Article from "../../components/Article";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as S from "./style";

function Home({ articles, setArticles }) {
  const [FilterArticles, setFilterArticles] = useState([]);
  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, [articles]);

  const ArticlesFilter = (title) => {
    const lowercaseTitle = title.toLowerCase();

    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(lowercaseTitle)
    );
    setFilterArticles(filteredArticles);
  };

  console.log(FilterArticles);
  return (
    <S.HomeContainer>
      <Header filterArticles={ArticlesFilter} />
      <S.ArticleContainer>
        {FilterArticles.length > 0
          ? FilterArticles.map((article) => (
              <Article {...article} key={article.id} />
            ))
          : articles.map((article) => (
              <Article {...article} key={article.id} />
            ))}
      </S.ArticleContainer>
      <Footer />
    </S.HomeContainer>
  );
}

export default Home;
