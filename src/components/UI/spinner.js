import './spinner.css';

const loadingSpinner = () => {
  return (
    <div className='Spinner-Container'>
      <div className='Spinner'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default loadingSpinner;
