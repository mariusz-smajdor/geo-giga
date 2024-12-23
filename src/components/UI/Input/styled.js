import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px;
  border: unset;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.text};
  color: ${({ theme }) => theme.color.inputText};
`;
