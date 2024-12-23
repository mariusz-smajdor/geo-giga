import { IconContext } from 'react-icons';
import {
  RiCompass3Line,
  RiHome2Line,
  RiFlagLine,
  RiRoadMapLine,
  RiEarthLine,
} from 'react-icons/ri';

import { Wrapper, Header, Title, List, Item, StyledLink, Text } from './styled';

function Navigation() {
  return (
    <IconContext.Provider value={{ size: '25px' }}>
      <Wrapper>
        <Header>
          <Title>GeoGiga</Title>
          <RiCompass3Line size='30px' />
        </Header>
        <List>
          <Item>
            <StyledLink to='/'>
              <RiHome2Line />
              <Text>Home</Text>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to='flags'>
              <RiFlagLine />
              <Text>Flags</Text>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to='street-view'>
              <RiRoadMapLine />
              <Text>Street View</Text>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to='lands'>
              <RiEarthLine />
              <Text>Lands</Text>
            </StyledLink>
          </Item>
        </List>
      </Wrapper>
    </IconContext.Provider>
  );
}

export default Navigation;
