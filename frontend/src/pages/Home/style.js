import { styled } from "styled-components";

export const HomeContainer = styled.div`
  padding: 3rem 5rem;
  min-height: 100vh;
  background: var(--gradient);
  box-sizing: border-box;
`;

export const ArticleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  row-gap: 1.5rem;
  padding: 5rem 0;
  box-sizing: border-box;
`;
