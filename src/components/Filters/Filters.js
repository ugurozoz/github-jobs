import './Filters.css';

const filters = () => {
  return (
    <aside className='Filters'>
      <div className='Filter-row job-type'>
        
        <label for='job-type-fulltime'><input
          type='checkbox'
          name='job-type-fulltime'
          id='job-type-fulltime'
        />Full time</label>
      </div>
      <div className='Filter-row location-search'>
        <strong>Location</strong>
        <input type='text' placeholder='City, state, zip code or country' />
        <input type='submit' />
      </div>

      <div className='Filter-row city-select-radios'>
        <div className='city-radio'>
          <label for='input0'>
            <input type='radio' id='input0' name='city-radie' />
            London
          </label>
          <span></span>
        </div>
        <div className='city-radio'>
          <label for='input1'>
            <input type='radio' id='input1' name='city-radie' />
            Amsterdam
          </label>
          <span></span>
        </div>
        <div className='city-radio'>
          <label for='input2'>
            <input type='radio' id='input2' name='city-radie' />
            New York
          </label>
          <span></span>
        </div>
        <div className='city-radio'>
          <label for='input3'>
            <input type='radio' id='input3' name='city-radie' />
            Berlin
          </label>
          <span></span>
        </div>
      </div>
    </aside>
  );
};

export default filters;
