import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";
import uuid from "react-uuid";
import Footer from "../../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register({ articles, setArticles }) {
  const [valuebackgroundImg, setValueBackgroundImg] = useState("");
  const [valueCategory, setValueCategory] = useState("");
  const [valueTitle, setValueTitle] = useState("");
  const [valueDescription, setValueDescription] = useState("");
  const [valueUserImg, setValueUserImg] = useState("");
  const [valueUserName, setValueUserName] = useState("");
  const [valueUserArea, setValueUserArea] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8800", {
        id: uuid(),
        backgroundImg: valuebackgroundImg,
        category: valueCategory,
        title: valueTitle,
        description: valueDescription,
        userImg: valueUserImg,
        userName: valueUserName,
        userArea: valueUserArea,
      });

      setArticles([
        ...articles,
        {
          id: res.data.id,
          backgroundImg: valuebackgroundImg,
          category: valueCategory,
          title: valueTitle,
          description: valueDescription,
          userImg: valueUserImg,
          userName: valueUserName,
          userArea: valueUserArea,
        },
      ]);

      setValueBackgroundImg("");
      setValueCategory("");
      setValueTitle("");
      setValueDescription("");
      setValueUserImg("");
      setValueUserName("");
      setValueUserArea("");

      toast.success("Artigo publicado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.RegisterContainer>
      <S.Title>Criar Noticia</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.FormContainer>
          <S.Label htmlFor="userArea">Área de usuário</S.Label>
          <S.Input
            type="text"
            id="userArea"
            value={valueUserArea}
            onChange={(e) => setValueUserArea(e.target.value)}
            required
          />
        </S.FormContainer>
        <S.FormContainer>
          <S.Label htmlFor="category">Categoria</S.Label>
          <S.Input
            type="text"
            id="category"
            value={valueCategory}
            onChange={(e) => setValueCategory(e.target.value)}
            required
          />
        </S.FormContainer>
        <S.FormContainer>
          <S.Label htmlFor="title">Titulo</S.Label>
          <S.Input
            type="text"
            id="title"
            value={valueTitle}
            onChange={(e) => setValueTitle(e.target.value)}
            required
          />
        </S.FormContainer>
        <S.FormContainer>
          <S.Label htmlFor="description">Descrição</S.Label>
          <S.Input
            type="text"
            id="description"
            value={valueDescription}
            onChange={(e) => setValueDescription(e.target.value)}
            required
          />
        </S.FormContainer>
        <S.FormContainer>
          <S.Label htmlFor="userImg">Imagem de usuário</S.Label>
          <S.Input
            type="text"
            id="userImg"
            value={valueUserImg}
            onChange={(e) => setValueUserImg(e.target.value)}
            required
          />
        </S.FormContainer>
        <S.FormContainer>
          <S.Label htmlFor="userName">Nome de usuário</S.Label>
          <S.Input
            type="text"
            id="userName"
            value={valueUserName}
            onChange={(e) => setValueUserName(e.target.value)}
            required
          />
        </S.FormContainer>
        <S.FormContainer style={{ gridColumn: "span 2" }}>
          <S.Label htmlFor="backgroundImg">Link da imagem</S.Label>
          <S.Input
            type="text"
            id="backgroundImg"
            value={valuebackgroundImg}
            onChange={(e) => setValueBackgroundImg(e.target.value)}
            required
          />
        </S.FormContainer>
        <S.Btn type="submit">Publicar</S.Btn>
      </S.Form>
      <Footer />
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </S.RegisterContainer>
  );
}

export default Register;
