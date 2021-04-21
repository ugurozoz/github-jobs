import './jobdetail.css';
import { TimeLabel } from '../Joblist/JoblistItem/timelabel/timelabel';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import imageNotFound from '../../assets/image-not-found.png';

const Main = () => {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState(null);

  useEffect(() => {
    fetchJobDetail(id);
  }, [id]);

  const fetchJobDetail = (id) => {
    console.log('FIFI');
    if (id) {
      let apiURL = 'https://githubjobs.trmov.com/';
      const searchParam = `https://jobs.github.com/positions/${id}.json`;
      axios.get(`${apiURL}${searchParam}`).then((response) => {
        console.log(response.data, 'sadsa');
        setJobDetail(response.data);
      });
    }
  };

  const detailPage = jobDetail ? (
    <section className='Detail-Body'>
      <aside className='Left-Column'>
        <a className='back-to-search' role='button' href='/'>
          <span></span>Back to search
        </a>

        <h2>HOW TO APPLY</h2>

        <div className='Left-Column__nfo'>
          <div
            dangerouslySetInnerHTML={{
              __html: jobDetail.how_to_apply,
            }}
          ></div>
        </div>
      </aside>
      <section className='Job-Detail'>
        <div className='Job-Detail__row'>
          <h1 className='Job-Detail__title'>{jobDetail.title}</h1>
          <span className='Job-Detail__type'>{jobDetail.type} </span>
        </div>
        <div className='Job-Detail__row elapsed-time'>
          <TimeLabel created={jobDetail.created_at} />
        </div>
        <div className='Job-Detail__row job-company'>
          <div className='company__logo'>
            <img src={jobDetail.company_logo ? jobDetail.company_logo :imageNotFound} alt={jobDetail.company} />
            
            
          </div>
          <div className='company__nfo'>
            <div className='company__name'>{jobDetail.company}</div>
            <div className='company__location'>{jobDetail.location}</div>
          </div>
        </div>
        <div className='Job-Detail__row job-description'>
          <div className='job__description'>
            <div
              dangerouslySetInnerHTML={{
                __html: jobDetail.description,
              }}
            ></div>
          </div>
        </div>
      </section>
    </section>
  ) : (
    <h2>Loading...</h2>
  );

  return detailPage;
};

export default Main;
