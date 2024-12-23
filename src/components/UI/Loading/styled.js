import styled from 'styled-components';
import { RiCompass3Line } from 'react-icons/ri';

export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.breakpoint.small}px;
  padding: 50px 150px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.primary};
`;

export const Icon = styled(RiCompass3Line)`
  font-size: 100px;

  animation: rotation 2s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
