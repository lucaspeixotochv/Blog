import React, { useEffect } from "react";
import * as S from "./style";
import Aos from "aos";
import "aos/dist/aos.css";

function Article({
  backgroundImg,
  category,
  title,
  description,
  userImg,
  userName,
  userArea,
  handleOpenModal,
}) {
  const handleClick = () => {
    handleOpenModal({
      backgroundImg,
      title,
      description,
      userImg,
      userName,
      userArea,
    });
  };
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <S.ArticleContainer onClick={handleClick} data-aos="fade-top">
      <S.Image src={backgroundImg} alt="background" />
      <S.Category>{category}</S.Category>
      <S.Title>{title}</S.Title>
      <S.Description>{description}.</S.Description>
      <S.UserContainer>
        <S.UserImage src={userImg} alt="Avatar" />
        <S.UserInfos>
          <S.UserName>{userName}</S.UserName>
          <S.UserArea>{userArea}</S.UserArea>
        </S.UserInfos>
      </S.UserContainer>
    </S.ArticleContainer>
  );
}

export default Article;
