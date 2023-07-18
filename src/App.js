import {BrowserRouter, Route} from 'react-router-dom'

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import Navigation from './components/Navigation';

import './App.css';

function App() {
  return (
    // <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/about-us" component={AboutUsPage} />
      </BrowserRouter>
    // </div>
  );
}

export default App;
