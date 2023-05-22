import React, { useState } from "react";
import * as S from "./style";
import uuid from "react-uuid";
import Footer from "../../components/Footer";

function Register({ articles, setArticles }) {
  const [valuebackgroundImg, setValueBackgroundImg] = useState("");
  const [valueCategory, setValueCategory] = useState("");
  const [valueTitle, setValueTitle] = useState("");
  const [valueDescription, setValueDescription] = useState("");
  const [valueUserImg, setValueUserImg] = useState("");
  const [valueUserName, setValueUserName] = useState("");
  const [valueUserArea, setValueUserArea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setArticles([
      ...articles,
      {
        id: uuid(),
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
    setValueTitle("");
    setValueDescription("");
    setValueUserImg("");
    setValueUserName("");
    setValueUserArea("");

    alert("Artigo publicado com sucesso!");
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
    </S.RegisterContainer>
  );
}

export default Register;
