import styled from 'styled-components';

export const Wrapper = styled.main`
  margin-left: ${({ theme }) => theme.layout.navbar}px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-left: unset;
    height: calc(
      100vh - ${({ theme }) => theme.layout.smallNavbar}px
    );
  }
`;
