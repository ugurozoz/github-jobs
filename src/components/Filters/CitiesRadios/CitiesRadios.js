import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const CitiesRadios = (props) => {
  const [cities, setCities] = useState([
    { cityName: 'London', citySelected: false },
    { cityName: 'Amsterdam', citySelected: false },
    { cityName: 'New York', citySelected: false },
    { cityName: 'Berlin', citySelected: false },
  ]);

  const filterState = useSelector((state) => state.filters);

  useEffect(() => {
    const selectedCityIndex = cities.findIndex(
      (city) => city.cityName === filterState.location
    );
    const newCities = cities.map(city => ({cityName: city.cityName, citySelected: false}));
    if (selectedCityIndex >= 0) {
      newCities[selectedCityIndex].citySelected = true;
      console.log(newCities)
    } else {
      newCities.push({ cityName: filterState.location, citySelected: true });
    }

    setCities(newCities);
    //console.log('newCities >>>', newCities);
  }, [filterState]);

  //console.log('cities >>>>>', cities);

  const citylist = cities.map((city, index) => {
    const checkedParameter = city.citySelected ? 'checked' : '';
    //console.log('checkedParameter >>>', checkedParameter);
    return (
      <div className='city-radio' key={city.cityName}>
        <label htmlFor={`city${index}`}>
          <input
            type='radio'
            id={`city${index}`}
            value={`${city.cityName}`}
            name='city-radio'
            onChange={props.changeHandler}
            checked={checkedParameter}
          />

          {city.cityName}
        </label>
        <span></span>
      </div>
    );
  });

  return <div className='Filter-row city-select-radios'>{citylist}</div>;
};
