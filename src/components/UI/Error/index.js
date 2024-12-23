import { Wrapper, Title, Text, StyledLink } from './styled';

function Error() {
  return (
    <Wrapper>
      <Title>We are sorry!</Title>
      <Text>
        Something went wrong! 💥 Check your internet connection or insert your
        <StyledLink to='/street-view'> Google API Key</StyledLink>, if that is
        not the case it is probably our mistake, please try again later!
      </Text>
    </Wrapper>
  );
}

export default Error;
