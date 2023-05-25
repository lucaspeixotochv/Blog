import { useEffect, useState } from "react";
import axios from "axios";
import Article from "../../components/Article";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as S from "./style";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CardMedia,
} from "@mui/material";

function Home({ articles, setArticles }) {
  const [FilterArticles, setFilterArticles] = useState([]);
  const [value, setValue] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({
    backgroundImg: "",
    title: "",
    description: "",
    userImg: "",
    userName: "",
    userArea: "",
  });

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = (data) => {
    setModalData(data);
    setOpenModal(true);
  };

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
  }, []);

  useEffect(() => {
    const lowercaseSearchValue = value.toLowerCase();
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(lowercaseSearchValue)
    );
    setFilterArticles(filteredArticles);
  }, [value]);

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Dialog
        open={openModal}
        onClose={closeModal}
        maxWidth="sm"
        fullWidth
        maxHeight="50%"
      >
        <CardMedia
          component="img"
          src={modalData.backgroundImg}
          alt={modalData.title}
          sx={{ maxHeight: "250px" }}
        />
        <DialogTitle>{modalData.title}</DialogTitle>
        <DialogContent>{modalData.description}</DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Sair</Button>
          <Button>Exluir</Button>
        </DialogActions>
      </Dialog>
      <S.HomeContainer>
        <Header handleSearch={handleSearch} />
        <S.ArticleContainer>
          {FilterArticles.length > 0
            ? FilterArticles.map((article) => (
                <Article
                  {...article}
                  key={article.id}
                  handleOpenModal={handleOpenModal}
                />
              ))
            : articles.map((article) => (
                <Article
                  {...article}
                  key={article.id}
                  handleOpenModal={handleOpenModal}
                />
              ))}
        </S.ArticleContainer>
        <Footer />
      </S.HomeContainer>
    </>
  );
}

export default Home;
