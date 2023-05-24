import { styled } from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);

  @media screen and (max-width: 720px) {
    gap: 1.5rem;
    flex-direction: column;
  }
`;

export const Logo = styled.h1`
  color: var(--blue-dark);
  text-align: center;
`;

export const HeaderList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
`;

export const HeaderItem = styled.li``;

export const HeaderInputContainer = styled.div`
  position: relative;
`;

export const StyledSearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const HeaderSearch = styled.input`
  background-color: #1f2937;
  border: none;
  border-radius: 1rem;
  padding: 0.7rem 1rem 0.7rem 3rem;
  outline: none;
  color: var(--white);

  &::placeholder {
    font-size: 1rem;
    color: var(--white);
  }
`;
