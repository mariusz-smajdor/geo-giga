import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: ${({ theme }) => theme.breakpoint.medium}px;
  padding: 25px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.primary};
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px 0;
  border-bottom: 2px solid;
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1ch;
`;

export const Games = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  color: inherit;
  text-decoration: none;
  text-align: center;
  transition: background ${({ theme }) => theme.time.transition}s;

  &:hover {
    background: ${({ theme }) => theme.color.secondary};
  }
`;
