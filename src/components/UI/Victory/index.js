import { useLocation } from 'react-router-dom';

import { Wrapper, Title, Text, StyledLink } from './styled';

function Victory() {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Title>Victory!</Title>
      <Text>
        Congratulations! 🎉 You have won the game. You can go back to the{' '}
        <StyledLink to='/'>homepage </StyledLink>
        or{' '}
        <StyledLink to={pathname} onClick={() => window.location.reload(false)}>
          play again!
        </StyledLink>
      </Text>
    </Wrapper>
  );
}

export default Victory;
