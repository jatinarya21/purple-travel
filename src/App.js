import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/Hero';
import TravelCompany from './Components/TravelCompany';
import EasyAndFast from './Components/EasyAndFast';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopDestinationSlider from './Components/TopDestinationSlider';
import WhyChooseUS from './Components/WhyChooseUS';
import UpdatesSection from './Components/Updates';
import Testimonials from './Components/Testimonials';
import OurExperience from './Components/OurExperience';
import FaqSection from './Components/Faq';
import AccordionItem from './Components/common/AccordionItem';
import FooterSection from './Components/Footer';
import SpecialOffersMailCard from './Components/SpecialOffersMailCard';


function App() {
  return (
    <div className="App">
      <HeroSection />
      <TravelCompany />
      <EasyAndFast />
      <TopDestinationSlider />
      <WhyChooseUS />
      <UpdatesSection />
      <Testimonials />
      <OurExperience />
      {/* <FaqSection/> */}
      <AccordionItem />
      <FooterSection />
      {/* <SpecialOffersMailCard/> */}
    </div>
  );
}

export default App;
