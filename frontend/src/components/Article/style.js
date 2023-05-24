import { styled } from "styled-components";

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 340px;
  max-height: 500px;
  /* justify-content: space-evenly; */
  gap: 1rem;
  cursor: pointer;
  transition: 0.75s;
  transform: translateZ(0);

  &:hover {
    transform: scale(1.04);
    transition: 0.75s;
  }
`;

export const Image = styled.img`
  width: 340px;
  height: 215px;
  object-fit: cover;
`;

export const Category = styled.p`
  color: var(--whitesmoke);
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
`;

export const Title = styled.h3`
  color: var(--white);
  font-size: 1.7rem;
`;

export const Description = styled.p`
  color: var(--whitesmoke);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const UserName = styled.h4`
  color: var(--white);
`;

export const UserArea = styled.p`
  color: var(--whitesmoke);
`;
