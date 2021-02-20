import JoblistItem from './JoblistItem/JoblistItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/use-actions';
import LoadingSpinner from '../UI/spinner';
import './Joblist.css';

const JobList = () => {
  const { fetchJobs } = useActions();
  const jobs = useSelector(({ githubJobs: { jobs, loading, error } }) => {
    return { jobs, loading, error };
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  
  const joblist = jobs.jobs.map((job) => {
    const { company, title, type, location, created_at, id } = job;
    return (
      <JoblistItem
        companyName={company}
        jobTitle={title}
        jobType={type}
        jobLocation={location}
        created={created_at}
        key={id}
      />
    );
  });

  return (
    <section className='Joblist'>
      
      {jobs.loading ? <LoadingSpinner/> : joblist}
    </section>
  );
};

export default JobList;
