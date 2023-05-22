import { styled } from "styled-components";

export const RegisterContainer = styled.div`
  background: var(--gradient);
  min-height: 100vh;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: var(--white);
  font-size: 2.5rem;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: 50%;
  gap: 1rem;
  margin: 3rem 0;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;
export const Input = styled.input`
  padding: 0.8rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
`;

export const Btn = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 0;
  cursor: pointer;
  grid-column: span 2;
`;
