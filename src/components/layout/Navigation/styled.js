import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Text = styled.span`
  display: none;
  white-space: nowrap;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border-radius: 20px;
  color: inherit;
  text-decoration: none;
  transition: background ${({ theme }) => theme.time.transition}s;

  &:hover {
    background: ${({ theme }) => theme.color.secondary};
  }
`;

export const Item = styled.li`
  padding: 15px;
  height: ${({ theme }) => theme.layout.navbar}px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Title = styled.h1`
  display: none;
  margin: 0;
  font-size: 25px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.1ch;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: ${({ theme }) => theme.layout.navbar}px;
  background: ${({ theme }) => theme.color.secondary};
`;

export const Wrapper = styled.nav`
  position: fixed;
  z-index: 9999;
  height: 100vh;
  width: ${({ theme }) => theme.layout.navbar}px;
  box-shadow: ${({ theme }) => theme.color.secondary} 0px 2px 8px 0px;
  background: ${({ theme }) => theme.color.primary};
  font-size: 18px;
  transition: width ${({ theme }) => theme.time.transition}s;

  &:hover {
    width: 250px;

    ${Title}, ${Text} {
      display: unset;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    bottom: 0;
    width: 100vw;
    height: ${({ theme }) => theme.layout.smallNavbar}px;
    transition: unset;

    ${Header} {
      display: none;
      height: 0;
    }

    ${List} {
      display: flex;
      justify-content: space-evenly;
    }

    ${Item} {
      height: unset;
      padding: 5px;
    }

    ${StyledLink} {
      padding: 10px;
    }

    &:hover {
      width: 100vw;

      ${Title}, ${Text} {
        display: none;
      }
    }
  }
`;
