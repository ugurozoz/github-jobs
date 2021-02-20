import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/use-actions';
import { CitiesRadios } from './CitiesRadios/CitiesRadios';
import './Filters.css';

const Filters = () => {
  const [state, setState] = useState({
    isLocationInputEmpty: true,
  });

  const locationInput = useRef(null);

  const filterState = useSelector((state) => state.filters);

  const { setJobTypeFilter, setLocationFilter, fetchJobs } = useActions();

  useEffect(() => {
    fetchJobs(filterState);
  }, [filterState]);

  const jobTypeChangeHandler = (event) => {
    setJobTypeFilter(event.target.checked);
  };

  const locationChangeHandler = (event) => {
    if (event.target.value.length !== 0) {
      setState({ isLocationInputEmpty: false });
    } else {
      setState({ isLocationInputEmpty: true });
    }
  };

  const locationSubmitHandler = () => {
    console.log(locationInput);
    const location = locationInput.current.value;
    setLocationFilter(location);
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
            ref={locationInput}
            type='text'
            placeholder='City, state, zip code or country'
            className='input-location'
            onChange={locationChangeHandler}
          />
          <button className='submit-location' onClick={locationSubmitHandler}>
            Submit
          </button>
        </div>
      </div>

      {
        <CitiesRadios
          changeHandler={citiesChangeHandler}
          locationInputEmpty={state.isLocationInputEmpty}
        />
      }
    </aside>
  );
};

export default Filters;
