import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  padding: 3rem 5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--gradient);
  box-sizing: border-box;
`;

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  row-gap: 1.5rem;
  padding: 5rem 0;
  box-sizing: border-box;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
export const ModalTextContainer = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex: 1;
`;

export const Text = styled.div``;

export const Author = styled.p`
  font-size: 0.7rem;
  margin-bottom: 0.7rem;
  color: var(--blue-dark);
`;

export const ModalTitle = styled.h3`
  font-size: 1.7rem;
`;

export const ModalDescription = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export const ModalCloseBtn = styled.button`
  padding: 1rem;
  margin: 0 auto;
  width: 30%;
  background-color: var(--blue-dark--hover);
  border-radius: 0.5rem;
  color: var(--white);
  border: none;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  cursor: pointer;
`;

export const EmptyArticles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const EmptyText = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: var(--white);
`;

export const ringAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(10deg);
  }
  40% {
    transform: rotate(-5deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-2deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const Emoji = styled.span`
  animation: ${ringAnimation} 2s infinite;
  display: inline-block;
`;
