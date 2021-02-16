import Layout from './hoc/Layout/Layout';
import Search from './components/Search/Search';
import Filters from './components/Filters/Filters';
import Joblist from './components/Joblist/Joblist';
import './App.css';

const app = () => {
  return (
    <div className='Container'>
      <Layout>
        <Search />
        <section className='Body'>
          <Filters />
          <Joblist />
        </section>
      </Layout>
    </div>
  );
};

export default app;
