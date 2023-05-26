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
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 1rem 0 0 1rem;
  border: none;
  background-color: #1f2937;
  align-self: stretch;
  box-sizing: border-box;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const StyledSearchIcon = styled(AiOutlineSearch)`
  color: var(--white);
  font-size: 1.2rem;
`;

export const HeaderSearch = styled.input`
  background-color: #1f2937;
  border: none;
  border-radius: 0 1rem 1rem 0;
  padding: 0.7rem 0;
  outline: none;
  color: var(--white);
  flex: 1;

  &::placeholder {
    font-size: 1rem;
    color: var(--white);
  }
`;
