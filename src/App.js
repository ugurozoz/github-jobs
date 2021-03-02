import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Main from './components/main/main';
import JobDetail from './components/jobdetail/jobdetail'

import './App.css';

const app = () => {
  const routes = (
    <Switch>
      <Route path="/:id" component={JobDetail} />
      <Route path='/' exact component={Main} />
    </Switch>
  );

  return (
    <div className='Container'>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
};

export default app;
