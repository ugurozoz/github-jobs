import { useState, useEffect } from 'react';

export const CitiesRadios = (props) => {
  const [cities, setCities] = useState([
    { cityName: 'London', citySelected: false },
    { cityName: 'Amsterdam', citySelected: false },
    { cityName: 'New York', citySelected: false },
    { cityName: 'Berlin', citySelected: false },
  ]);

  const citylist = cities.map((city, index) => {
    return (
      <div className='city-radio'>
        <label htmlFor={`city${index}`}>
          <input
            type='radio'
            id={`city${index}`}
            value={`${city.cityName}`}
            name='city-radio'
            {...(city.citySelected ? 'checked' : '')}
          />

          {city.cityName}
        </label>
        <span></span>
      </div>
    );
  });

  //console.log('CITIES RADIOS RERENDERED');

  return (
    <div
      className='Filter-row city-select-radios'
      onChange={props.changeHandler}
    >
      {citylist}
    </div>
  );
};
