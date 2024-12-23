import styled from 'styled-components';

export const Country = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 25px;
  padding-bottom: 25px;
  border: 2px solid ${({ theme }) => theme.color.secondary};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.color.secondary} 0px 2px 8px 0px;
  background: ${({ theme }) => theme.color.primary};
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Flag = styled.img`
  min-width: 450px;
  max-width: ${({ theme }) => theme.breakpoint.small}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    min-width: unset;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 20px;
  padding: 0 25px;
  grid-template-columns: 1fr auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    grid-template-columns: 1fr;
  }
`;

export const HelpButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 0 25px;
  margin-bottom: -20px;
`;

export const Hints = styled.div`
  padding: 0 25px;
`;

export const Hint = styled.p`
  margin: 20px 0 0 0;
`;
