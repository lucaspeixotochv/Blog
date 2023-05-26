import React, { useEffect, useState } from "react";
import * as S from "./style";
import Aos from "aos";
import "aos/dist/aos.css";

function Header({ handleSearch }) {
  useEffect(() => {
    Aos.refresh({ duration: 1500 });
  }, []);
  return (
    <S.HeaderContainer>
      <S.Logo data-aos="fade-right">UCB Technology</S.Logo>

      <S.HeaderInputContainer data-aos="fade-left">
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
