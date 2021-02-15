import Layout from './hoc/Layout/Layout';
import Search from './components/Search/Search';
import './App.css';

const app = () => {
  return (
    <div className='Container'>
      <Layout>
        <Search/>
        <aside className='Filter'>Left Filter Component</aside>
        <section className='Joblist'>Jobs</section>
      </Layout>
    </div>
  );
};

export default app;
