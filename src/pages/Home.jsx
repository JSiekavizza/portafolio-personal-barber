import Header from "../components/header/Header.jsx";
import Services from "../components/services/Services.jsx";
import FixedBackground from "../components/layout/FixedBackground.jsx";
import GrainOverlay from "../components/layout/GrainOverlay.jsx";
import SobreMi from "../components/about/SobreMi.jsx";
import StatsBar from "../components/stats/StatsBar.jsx";
import Portfolio from "../components/portfolio/Portfolio.jsx";
import CtaBanner from "../components/cta/CtaBanner.jsx";
import Contacto from "../components/contact/Contacto.jsx"

const Home = () => {
  return (
    <div className="relative min-h-screen bg-base">
      <FixedBackground />
      <GrainOverlay />
      <div className="relative z-10">
        <div className= "relative z-10">
          <Header />
        </div>
          <Services />
          <div className="px-7">
            <SobreMi />
          </div>
          <StatsBar />
          <Portfolio />
          <CtaBanner />
          <Contacto />
      </div>
    </div>
  );
};

export default Home;