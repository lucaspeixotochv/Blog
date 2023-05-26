import React, { useEffect, useState } from "react";
import * as S from "./style";
import "aos/dist/aos.css";

function Header({ handleSearch }) {
  return (
    <S.HeaderContainer>
      <S.Logo>UCB Technology</S.Logo>

      <S.HeaderInputContainer>
        <S.Button>
          <S.StyledSearchIcon />
        </S.Button>
        <S.HeaderSearch
          type="text"
          placeholder="Search"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
      </S.HeaderInputContainer>
    </S.HeaderContainer>
  );
}

export default Header;
