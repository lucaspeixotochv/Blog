import React, { useState } from "react";
import * as S from "./style";

function Header({ handleSearch }) {
  const category = ["UI Design", "Front end", "Back end"];

  return (
    <S.HeaderContainer>
      <S.Logo>UCB Technology</S.Logo>
      <S.HeaderList>
        {category.map((element, index) => (
          <S.HeaderItem key={index}>{element}</S.HeaderItem>
        ))}
      </S.HeaderList>
      <S.HeaderInputContainer>
        <S.HeaderSearch
          type="text"
          placeholder="Search"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <S.StyledSearchIcon />
      </S.HeaderInputContainer>
    </S.HeaderContainer>
  );
}

export default Header;
