import {Route} from 'react-router-dom'

import Layout from "../src/Layout/Layout"

import routes from './routes';

function App() {
  return (
    <Layout>
      {routes.map((route) => (
        <Route {...route}/>
      ))}
    </Layout>
  );
}

export default App;
