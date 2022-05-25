import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Switch} from 'react-router-dom';
import Navigation from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Home from './components/hero/hero';
import About from './components/About/about';
import Teams from './components/Teams/teams';
import Contact from './components/Contact Us/contact_us';
import Events from './components/Events/events';
import Join from './components/Join Us/join_us';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navigation />
        </div>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Teams" element={<Teams/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path='/Join Us' element={<Join/>} />
          <Route path="/contactus" element={<Contact />} />
        </Switch>
        </BrowserRouter>
      <Hero/>
    </>
  );
}

export default App;
