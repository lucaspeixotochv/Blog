import React, { useState } from "react";
import * as S from "./style";

function Header({ filterArticles }) {
  const category = ["UI Design", "Front end", "Back end"];

  const [value, setValue] = useState("");

  console.log(value);

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
            setValue(e.target.value);
            filterArticles(value);
          }}
        />
        <S.StyledSearchIcon />
      </S.HeaderInputContainer>
    </S.HeaderContainer>
  );
}

export default Header;
