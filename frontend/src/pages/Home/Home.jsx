import { useEffect, useState } from "react";
import axios from "axios";
import Article from "../../components/Article";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as S from "./style";
import Modal from "react-modal";

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
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        style={{
          overlay: { backgroundColor: "rgba(255, 255, 255, 0.1)" },
          content: {
            height: "70%",
            width: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: 0,
            border: "none",
          },
        }}
      >
        <S.ModalContainer>
          <S.ModalImg src={modalData.backgroundImg} alt={modalData.title} />
          <S.ModalTextContainer>
            <S.Text>
              <S.ModalTitle>{modalData.title}</S.ModalTitle>
              <S.ModalDescription>{modalData.description}</S.ModalDescription>
            </S.Text>
            <S.ModalCloseBtn onClick={() => setOpenModal(!openModal)}>
              Sair
            </S.ModalCloseBtn>
          </S.ModalTextContainer>
        </S.ModalContainer>
      </Modal>
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
