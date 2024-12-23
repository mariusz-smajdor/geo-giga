import { Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Container from '../../components/layout/Container';
import { regions } from '../../regions';
import { Input } from '../../components/UI/Input/styled';
import { Button } from '../../components/UI/Button/styled';
import { Wrapper, Form, Title, Games, StyledLink } from './styled';

function getKeyFromLocalStorage() {
  const googleKey = localStorage.getItem('googleKey');

  return googleKey === null ? '' : googleKey;
}

function Regions() {
  const [inputValue, setInputValue] = useState(getKeyFromLocalStorage);
  const { pathname } = useLocation();

  function onFormSubmit(event) {
    event.preventDefault();

    localStorage.setItem('googleKey', inputValue);
  }

  return (
    <Container>
      <Wrapper>
        {pathname === '/street-view' && (
          <Fragment>
            <Title>Enter your Google API Key</Title>
            <Form onSubmit={onFormSubmit}>
              <Input
                placeholder='Your Google API Key'
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
              />
              <Button>Set the key</Button>
            </Form>
          </Fragment>
        )}
        <Title>Choose Region</Title>
        <Games>
          {regions.map(region => (
            <StyledLink key={region.id} to={`${region.id}`} state={inputValue}>
              {region.name}
            </StyledLink>
          ))}
        </Games>
      </Wrapper>
    </Container>
  );
}

export default Regions;
