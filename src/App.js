import './App.css';
// import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Team from './components/team/team'
import Event from './components/event/event'
import Joinus from './components/joinus/joinus';
import ContactUs from './components/contact/contact';
function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Hero/>
    <About/>
    <Team/>
    <Event/>
    <Joinus/>
    <ContactUs/>
    </>
  );
}

export default App;
