import Header from "../components/header/Header.jsx";
import Services from "../components/services/Services.jsx";
import FixedBackground from "../components/layout/FixedBackground.jsx";
import Portfolio from "../components/portfolio/Portfolio.jsx";
import GrainOverlay from "../components/layout/GrainOverlay.jsx";
import SobreMi from "../components/about/SobreMi.jsx";
import StackSection from "../components/layout/StackSection.jsx";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-base">
      <FixedBackground />
      <GrainOverlay />
      <div className="relative z-10">
        <div className= "relative z-10">
          <Header />
        </div>
        <div className="relative z-20">  
          <Services />
        </div>
        <StackSection zIndex={30}>
          <SobreMi />
        </StackSection>
        <StackSection zIndex={40}>
          <Portfolio />
        </StackSection>  
      </div>
    </div>
  );
};

export default Home;