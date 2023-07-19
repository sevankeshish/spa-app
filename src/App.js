import {Route , Switch} from 'react-router-dom'

import Layout from "../src/Layout/Layout"

import routes from './routes';

function App() {
  return (
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route {...route}/>
        ))}
      </Switch>
    </Layout>
  );
}

export default App;
