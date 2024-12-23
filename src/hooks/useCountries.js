import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCountries } from '../getCountries';
import { draw } from '../draw';
import { regions } from '../regions';
import { hints } from '../hints';

export function useCountries() {
  const [data, setData] = useState({ status: 'loading' });
  const { region } = useParams();

  useEffect(() => {
    async function fetchCountries() {
      try {
        const countries = await getCountries();

        if (region === 'all-countries') {
          setData({
            status: 'success',
            countries,
            drawnCountry: draw(countries),
            countryHints: [],
          });

          return;
        }

        if (region === 'un-countries') {
          const newCountries = countries.filter(
            country => country.unMember
          );

          setData({
            status: 'success',
            countries: newCountries,
            drawnCountry: draw(newCountries),
            countryHints: [],
          });

          return;
        }

        const index = regions.findIndex(mode => mode.id === region);

        const newCountries = countries.filter(
          country => country.continent === regions[index].name
        );

        setData({
          status: 'success',
          countries: newCountries,
          drawnCountry: draw(newCountries),
          countryHints: [],
        });
      } catch (error) {
        setData({
          status: 'error',
          message: error,
        });
      }
    }

    fetchCountries();
  }, [region]);

  function removeCountry() {
    const newCountries = data.countries.filter(
      country => country !== data.drawnCountry
    );

    setData({
      status: 'success',
      countries: newCountries,
      drawnCountry: draw(newCountries),
      countryHints: [],
    });
  }

  function skipCountry() {
    const countries = data.countries;

    setData({
      status: 'success',
      countries,
      drawnCountry: draw(countries),
      countryHints: [],
    });
  }

  function getCountryHints() {
    const newHint = draw(hints);

    if (data.countryHints.length === hints.length) {
      return;
    }

    if (data.countryHints.includes(newHint)) {
      getCountryHints();

      return;
    }

    const newHints = [...data.countryHints, newHint];

    setData({
      ...data,
      countryHints: newHints,
    });
  }

  return {
    data,
    removeCountry,
    skipCountry,
    getCountryHints,
  };
}
