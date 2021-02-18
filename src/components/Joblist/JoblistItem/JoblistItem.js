import './JoblistItem.css';
import companyLogo from './company-logo.jpg';

const LogoImage = require('./company-logo.jpg');

const joblistItem = (props) => {
  const one_day = 1000 * 60 * 60 * 24;
  const one_hour = 1000 * 60 * 60;

  const jobCreated = new Date(props.created);
  const elapsed = Date.now() - jobCreated;
  // console.log(elapsed);

  return (
    <div className='JoblistItem'>
      <div className='company__logo'>
        <img src={companyLogo} />
      </div>
      <div className='job-info'>
        <div className='company-name'>{props.companyName}</div>
        <div className='job__title'>{props.jobTitle}</div>
        <div className='type-loc-time'>
          <div className='job__type'>{props.jobType}</div>
          <div className='job__right-bottom'>
            <div className='job__loc'>{props.jobLocation}</div>
            <div className='job__time'>
              {elapsed > one_day ? `${Math.floor(elapsed / one_day)} day` : `${Math.round(elapsed / one_hour)} hours ago`}
            </div>
          </div>
        </div>

        <div className='company__name'></div>
      </div>
    </div>
  );
};

export default joblistItem;
