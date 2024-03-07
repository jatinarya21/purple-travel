import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/HeroSection';
import TravelCompany from './Components/TravelCompany';
import EasyAndFast from './Components/EasyAndFast';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopDestinationSlider from './Components/TopDestinationSlider';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <TravelCompany />
      <EasyAndFast />
      <TopDestinationSlider/>
    </div>
  );
}

export default App;
