import React, { useState } from "react";
import * as S from "./style";

function Header({ handleSearch }) {
  return (
    <S.HeaderContainer>
      <S.Logo>UCB Technology</S.Logo>

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
