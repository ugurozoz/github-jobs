import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../../hooks/use-actions';
import './SearchInput.css';

const SearchInput = () => {
  // const filterState = useSelector((state) => state.filters);

  const { setSearchTermFilter, fetchJobs } = useActions();

  const searchTermInput = useRef(null);

  const onSubmitHandler = () => {
    if (searchTermInput.current.value) {
      setSearchTermFilter(searchTermInput.current.value);
    } else {
      setSearchTermFilter('');      
    }
  };

  const onChangeHandler = () => {
    if (!searchTermInput.current.value) {
      setSearchTermFilter(''); 
    } 
  };

  return (
    <div className='Search-Input'>
      <span className='Search-Input__briefcase-icon'></span>
      <input
        ref={searchTermInput}
        className='Search-Input__text'
        type='text'
        placeholder='Title, companies, experti...'
        onChange={onChangeHandler}
      />
      <button
        className='Search-Input__submit'
        type='submit'
        onClick={onSubmitHandler}
       
      >
        Submit
      </button>
    </div>
  );
};

export default SearchInput;
