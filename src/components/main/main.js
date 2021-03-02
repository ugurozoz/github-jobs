
import Search from '../Search/Search';
import Filters from '../Filters/Filters';
import JobList from '../Joblist/Joblist';

const main = () => {

  return (
    <>
    <Search />
        <section className='Body'>
          <Filters />
          <JobList />
      </section>
      </>
    
  )
  
}


export default main