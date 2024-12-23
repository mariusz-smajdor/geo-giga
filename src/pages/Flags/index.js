import { useState, useRef } from 'react';

import Container from '../../components/layout/Container';
import Loading from '../../components/UI/Loading';
import Error from '../../components/UI/Error';
import Victory from '../../components/UI/Victory';
import { useCountries } from '../../hooks/useCountries';
import { Input } from '../../components/UI/Input/styled';
import { Button } from '../../components/UI/Button/styled';
import { Country, Flag, Form, HelpButtons, Hints, Hint } from './styled';

function Flags() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const { data, removeCountry, skipCountry, getCountryHints } = useCountries();

  function onFormSubmit(event) {
    event.preventDefault();

    const countryName = inputValue.trim().toLowerCase();

    if (countryName !== data.drawnCountry.name.common.toLowerCase()) {
      inputRef.current.focus();
      return;
    }

    removeCountry();
    setInputValue('');
    inputRef.current.focus();
  }

  return (
    <Container>
      {data.status === 'loading' && <Loading />}
      {data.status === 'error' && <Error />}
      {data.status === 'success' &&
        (data.countries.length > 0 ? (
          <Country>
            <Flag src={data.drawnCountry.flag} alt={`Flag`} />
            <Form onSubmit={onFormSubmit}>
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                placeholder='Country name'
              />
              <Button>Guess!</Button>
            </Form>
            <HelpButtons>
              <Button
                onClick={() => getCountryHints()}
                disabled={data.countryHints.length === 4}
              >
                Hint
              </Button>
              <Button onClick={() => skipCountry()}>Skip</Button>
            </HelpButtons>
            <Hints>
              {data.countryHints.map(hint => {
                return hint === 'Population' ? (
                  <Hint key={hint}>
                    {hint}: {data.drawnCountry.population}
                  </Hint>
                ) : hint === 'Official languages' ? (
                  <Hint key={hint}>
                    {hint}:{' '}
                    {Object.values(data.drawnCountry.languages).join(', ')}
                  </Hint>
                ) : hint === 'Subregion' ? (
                  <Hint key={hint}>
                    {hint}: {data.drawnCountry.subregion}
                  </Hint>
                ) : (
                  <Hint key={hint}>
                    {hint}: {data.drawnCountry.capital}
                  </Hint>
                );
              })}
            </Hints>
          </Country>
        ) : (
          <Victory />
        ))}
    </Container>
  );
}

export default Flags;
