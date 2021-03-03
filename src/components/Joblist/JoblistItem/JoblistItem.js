import './JoblistItem.css';
import { TimeLabel } from './timelabel/timelabel';
// import {Link } from "react-router-dom";


const joblistItem = (props) => {
   

  
  return (
    
    <a className='JoblistItem' href={`/${props.jobId}`}>
      
      <div className='company__logo'>
        <img src={props.companyLogo} alt={props.companyName} />
      </div>
      <div className='job-info'>
        
        <span className='company-name'>{props.companyName}</span>
        <p className='job__title'>{props.jobTitle}</p>
        

        <div className='type-loc-time'>
          <div className='job__type'>{props.jobType}</div>
          <div className='job__right-bottom'>
            <div className='job__loc'>{props.jobLocation}</div>
            
            <TimeLabel created={props.created} />
            
          </div>
        </div>

        <div className='company__name'></div>
      </div>
      
    
      </a>
      
  );
};

export default joblistItem;
