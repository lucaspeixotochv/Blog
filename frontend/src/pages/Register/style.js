import { styled } from "styled-components";
import { HiOutlineNewspaper } from "react-icons/hi";

export const RegisterContainer = styled.div`
  background: var(--gradient);
  min-height: 100vh;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    padding: 2rem 0;
  }
`;

export const Title = styled.h3`
  color: var(--white);
  font-size: 2.5rem;
  text-transform: uppercase;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    bottom: 0;
    left: 0;
    margin-top: 0.2rem;
    background: var(--white);
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: 50%;
  gap: 1rem;
  margin: 3rem 0;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    width: 80%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: span 2;

  @media screen and (max-width: 720px) {
    grid-column: 1;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 1.2rem;
`;
export const Input = styled.input`
  padding: 0.8rem 1rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  color: var(--blue-gray);
  font-weight: 500;

  &::placeholder {
    font-size: 1rem;
  }
`;

export const Btn = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 0;
  cursor: pointer;
  grid-column: span 2;
  width: 50%;
  margin: 0 auto;
  background-color: var(--blue-gray);
  color: var(--white);
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transform: translateZ(0);

  &:hover {
    transform: scale(0.98);
    transition: 0.5s;
  }

  @media screen and (max-width: 720px) {
    grid-column: 1;
  }
`;

export const StyledNewsPaperIcon = styled(HiOutlineNewspaper)`
  font-size: 1.2rem;
`;
