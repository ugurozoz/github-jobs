import './SearchInput.css';

const searchInput = () => {
  return (
    <div className='Search-Input'>
      <span className="Search-Input__briefcase-icon"></span>
      <input className="Search-Input__text" type='text' placeholder="Title, companies, experti..." />
      <input className="Search-Input__submit" type='submit' />
    </div>
  );
};

export default searchInput;
