import { Fragment, useState } from 'react';
import ReactStreetview from 'react-streetview';
import { Marker, TileLayer, Polyline, useMapEvents } from 'react-leaflet';
import { useLocation } from 'react-router-dom';

import { useCountries } from '../../hooks/useCountries';
import { useCalculateDistance } from '../../hooks/useCalcualteDistance';
import Error from '../../components/UI/Error';
import Loading from '../../components/UI/Loading';
import { Button } from '../../components/UI/Button/styled';
import {
  Wrapper,
  Street,
  Map,
  StyledMap,
  ResultMap,
  ResultField,
} from './styled';

function StreetView() {
  const [position, setPosition] = useState(null);
  const { state: googleKey } = useLocation();
  const { data, skipCountry } = useCountries();
  const { result, distance, setResult, calculateDistance } =
    useCalculateDistance();

  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.on('click', function (e) {
          setPosition([e.latlng.lat, e.latlng.lng]);
        });
      },
    });

    return position === null ? null : <Marker position={position} />;
  }

  function changeCountryHandler() {
    setResult(false);
    setPosition(null);
    skipCountry();
  }

  function calcualteDistanceHandler() {
    if (!position) return;

    calculateDistance(
      data.drawnCountry.streetView[0],
      data.drawnCountry.streetView[1],
      position[0],
      position[1]
    );
  }

  return (
    <Wrapper>
      {data.status === 'loading' && <Loading />}
      {data.status === 'error' && <Error />}
      {googleKey !== '' && data.status === 'success' && !result && (
        <Fragment>
          <Street>
            <ReactStreetview
              apiKey={googleKey}
              streetViewPanoramaOptions={{
                position: {
                  lat: data.drawnCountry.streetView[0],
                  lng: data.drawnCountry.streetView[1],
                },
                pov: { heading: 100, pitch: 0 },
                zoom: 1,
                disableDefaultUI: true,
                showRoadLabels: false,
              }}
            />
          </Street>
          <Map>
            <StyledMap center={[40, 0]} zoom={2} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <LocationMarker />
            </StyledMap>
            <Button onClick={calcualteDistanceHandler}>Guess!</Button>
          </Map>
        </Fragment>
      )}
      {result && (
        <Fragment>
          <ResultMap
            center={[
              data.drawnCountry.streetView[0],
              data.drawnCountry.streetView[1],
            ]}
            zoom={3}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker
              position={[
                data.drawnCountry.streetView[0],
                data.drawnCountry.streetView[1],
              ]}
            />
            <Marker position={position} />
            <Polyline
              positions={[
                [
                  data.drawnCountry.streetView[0],
                  data.drawnCountry.streetView[1],
                ],
                [position[0], position[1]],
              ]}
            ></Polyline>
          </ResultMap>
          <ResultField>
            <p>You were off by {distance.toFixed(3)} km</p>
            <Button onClick={changeCountryHandler}>Next map</Button>
          </ResultField>
        </Fragment>
      )}
    </Wrapper>
  );
}

export default StreetView;
