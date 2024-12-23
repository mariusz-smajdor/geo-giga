import { Fragment } from 'react';
import { GeoJSON } from 'react-leaflet';

import { useCountries } from '../../hooks/useCountries';
import mapData from './mapCountries.json';
import { theme } from '../../theme';
import { Map, CountryPanel, Flag, Info } from './styled';
import Loading from '../../components/UI/Loading';
import Error from '../../components/UI/Error';
import Container from '../../components/layout/Container';

function Lands() {
  const { data } = useCountries();

  function onEachCountry(country, layer) {
    layer.on({
      click: e => {
        const { ADMIN: clickedCountry } = country.properties;
        if (clickedCountry !== data.drawnCountry.name.common) return;
        e.target.setStyle({
          fillColor: theme.color.primary,
          color: theme.color.text,
        });
      },
    });
  }

  const countryStyles = {
    fillColor: 'white',
    fillOpacity: 1,
    color: '#333',
    weight: 0.5,
  };

  return (
    <Fragment>
      {data.status !== 'success' ? (
        <Container>
          {data.status === 'loading' && <Loading />}
          {data.status === 'error' && <Error />}
        </Container>
      ) : (
        <Fragment>
          <CountryPanel>
            <Info>{`Click on ${data.drawnCountry.name.common}`}</Info>
            <Flag
              src={data.drawnCountry.flag}
              alt={`Flag of ${data.drawnCountry.flag}`}
            />
          </CountryPanel>
          <Map zoom={2} minZoom={2} center={[0, 0]}>
            <GeoJSON
              style={countryStyles}
              data={mapData.features}
              onEachFeature={onEachCountry}
            ></GeoJSON>
          </Map>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Lands;
