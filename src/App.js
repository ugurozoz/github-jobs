import Layout from './hoc/Layout/Layout';
import Search from './components/Search/Search';
import Filters from './components/Filters/Filters';
import './App.css';

const app = () => {
  return (
    <div className='Container'>
      <Layout>
        <Search />
        <section className='Body'>
          <Filters />

          <section className='Joblist'>Jobs</section>
        </section>
      </Layout>
    </div>
  );
};

export default app;
