import './App.css';
import Header from './components/Header';
import Item from './components/Item'
import Footer from './components/Footer'
import Menu from './assets/hamburger.webp'
import Logo from './assets/SpaceX-Logo.wine.png'
import Ax3 from './assets/axiom3.jpg'
import Starlink from './assets/Starlink.jpg'
import Starmission from './assets/Starlink2.jpg'
import Starship from './assets/Starship.jpg'

function App() {
  return (
    <div className="App">
      <Header logo={Logo} menu={Menu}/>
      <div className='item-container'>
          <Item heading="Current mission" title="AX-3 MISSION" image={Ax3}  button="Rewatch" />
          <Item heading="Recent Launch" title="STARLINK MISSION" image={Starlink} button="Learn more"/>
          <Item heading="Recent Launch" title="Starlink Mission" image={Starmission}
          button="rewatch"/>
          <Item heading="Recent Launch" title="Starship's second flight test" image={Starship} button="Learn more"/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
