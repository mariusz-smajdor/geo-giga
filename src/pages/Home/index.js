import Container from '../../components/layout/Container';
import { IconContext } from 'react-icons';
import { RiFlagLine, RiRoadMapLine, RiEarthLine } from 'react-icons/ri';
import { Wrapper, Title, Text, Games, Game, StyledLink } from './styled';

function Home() {
  return (
    <Container>
      <Wrapper>
        <Title>Welcome to the Geo Giga!</Title>
        <Text>Choose the game you want to play</Text>
        <Games>
          <IconContext.Provider value={{ size: '25px' }}>
            <StyledLink to='flags'>
              <Game>
                <RiFlagLine />
                Flags Game
              </Game>
            </StyledLink>
            <StyledLink to='street-view'>
              <Game>
                <RiRoadMapLine />
                Street View Game
              </Game>
            </StyledLink>
            <StyledLink to='lands'>
              <Game>
                <RiEarthLine />
                Lands Game
              </Game>
            </StyledLink>
          </IconContext.Provider>
        </Games>
      </Wrapper>
    </Container>
  );
}

export default Home;
