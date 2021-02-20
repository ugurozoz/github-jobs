import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/use-actions';
import { CitiesRadios } from './CitiesRadios/CitiesRadios';
import './Filters.css';

const Filters = () => {
  const [state, setState] = useState({
    isLocationInputEmpty: true,
  });

  console.log(state);

  const filterState = useSelector((state) => {
    return state.filters;
  });

  const { setJobTypeFilter, setLocationFilter } = useActions();

  useEffect(() => {
    console.log('USEEFFECT CALLED');
  }, [filterState]);

  const jobTypeChangeHandler = () => {
    setJobTypeFilter(!filterState.full);
  };

  const locationChangeHandler = (event) => {
    setLocationFilter(event.target.value);
    if (event.target.value.length !== 0) {
      setState({ isLocationInputEmpty: false });
    } else {
      setState({ isLocationInputEmpty: true });
    }
  };

  const citiesChangeHandler = (event) => {
    setLocationFilter(event.target.value);
  };

  return (
    <aside className='Filters'>
      <div className='Filter-row job-type'>
        <label htmlFor='job-type-fulltime'>
          <input
            type='checkbox'
            name='job-type-fulltime'
            id='job-type-fulltime'
            onChange={jobTypeChangeHandler}
          />
          Full time
        </label>
      </div>
      <div className='Filter-row location-search'>
        <strong className='location-search__heading'>LOCATION</strong>
        <div className='location-search__inputs'>
          <span className='globe-icon'></span>
          <input
            value={filterState.location}
            type='text'
            placeholder='City, state, zip code or country'
            className='input-location'
            onChange={locationChangeHandler}
          />
          <input type='submit'  className="submit-location" />
        </div>
      </div>

      {
        <CitiesRadios
          changeHandler={citiesChangeHandler}
          locationEnteredViaInput={state.isLocationInputEmpty}
        />
      }
    </aside>
  );
};

export default Filters;
