import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.breakpoint.medium}px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.color.secondary} 0px 2px 8px 0px;
  background: ${({ theme }) => theme.color.primary};
  padding: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 22px;
`;

export const Text = styled.p`
  line-height: 1.5;
`;

export const Games = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  text-align: center;
  gap: 20px;
`;

export const Game = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border: 2px solid;
  border-radius: 20px;
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
