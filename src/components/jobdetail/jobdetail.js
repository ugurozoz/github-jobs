import './jobdetail.css';
import { TimeLabel } from '../Joblist/JoblistItem/timelabel/timelabel';

const main = () => {
  return (
    <section className='Detail-Body'>
      <aside className='Left-Column'>
        <a className='back-to-search' role='button'>
          <span></span>Back to search
        </a>

        <h2>HOW TO APPLY</h2>

        <div className='Left-Column__nfo'>
          Please email a copy of your resume and online portfolio to{' '}
          <a href='#'>wes@kasisto.com</a> & CC <a href='#'>eric@kasisto.com</a>
        </div>
      </aside>
      <section className='Job-Detail'>
        <div className='Job-Detail__row'>
          <h1 className='Job-Detail__title'>Front-End Software Engineer</h1>
          <span className='Job-Detail__type'>Full Time</span>
        </div>
        <div className='Job-Detail__row'>
        <TimeLabel created={Date.now()} />

        </div>
      </section>
    </section>
  );
};

export default main;
