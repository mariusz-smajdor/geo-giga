import styled from 'styled-components';

export const Button = styled.button`
  padding: calc(25px - 1rem);
  border: 2px solid ${({ theme }) => theme.color.text};
  border-radius: 20px;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.text};
  transition: background ${({ theme }) => theme.time.transition}s;

  &:hover {
    background: ${({ theme }) => theme.color.text};
    color: ${({ theme }) => theme.color.secondary};
  }

  &:disabled {
    filter: brightness(50%);

    &:hover {
      background: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.text};
    }
  }
`;
