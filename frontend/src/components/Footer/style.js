import { styled } from "styled-components";
import { BiCopyright } from "react-icons/bi";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  gap: 0.5rem;
  font-size: 1.2rem;
`;

export const StyledCopyIcon = styled(BiCopyright)`
  font-weight: 700;
`;

export const Text = styled.p`
  font-weight: 500;
`;
