import {Route} from 'react-router-dom'

import Layout from "../src/Layout/Layout"

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import Profile from './pages/Profile';

function App() {
  return (
    <Layout>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/profile" component={Profile}/>
    </Layout>
  );
}

export default App;
