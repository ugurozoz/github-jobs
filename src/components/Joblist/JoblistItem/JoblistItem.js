import './JoblistItem.css';
import companyLogo from './company-logo.jpg';


const joblistItem = (props) => {
  const one_day = 1000 * 60 * 60 * 24;
  const one_hour = 1000 * 60 * 60;

  const jobCreated = new Date(props.created);
  const elapsed = Date.now() - jobCreated;

  const days = Math.floor(elapsed / one_day);
  const hours = Math.round(elapsed / one_hour);
  
  

  
  return (
    <div className='JoblistItem'>
      <div className='company__logo'>
        <img src={props.companyLogo} alt={props.companyName} />
      </div>
      <div className='job-info'>
        <div className='company-name'>{props.companyName}</div>
        <div className='job__title'>{props.jobTitle}</div>
        <div className='type-loc-time'>
          <div className='job__type'>{props.jobType}</div>
          <div className='job__right-bottom'>
            <div className='job__loc'>{props.jobLocation}</div>
            <div className='job__time'>
              {elapsed > one_day ? `${days} day${days>1?'s':''} ago` : `${hours} hour${hours>1?'s':''} ago`}
            </div>
          </div>
        </div>

        <div className='company__name'></div>
      </div>
    </div>
  );
};

export default joblistItem;
