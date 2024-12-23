import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
  padding: 25px;
  max-width: ${({ theme }) => theme.breakpoint.small}px;
  background: ${({ theme }) => theme.color.error};
  border-radius: 20px;
`;

export const Title = styled.h2`
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1ch;
`;

export const Text = styled.p`
  line-height: 1.5;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: 2px underline;
  }
`;
