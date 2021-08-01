import "./styles/Style.css";
import Navbar from "./Navbar";
import HeaderBanner from "./HeaderBanner";
import WelcomeContent from "./WelcomeContent";
import WeatherChannel from "./WeatherChannel";
import FeaturedDestination from "./FeaturedDestination";
import PromoQoute from "./PromoQoute";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {/* Header Banner */}
      <HeaderBanner />
      {/* Navigation Bar */}
      <Navbar />
      {/* Welcome Content */}
      <WelcomeContent id="wct" />
      {/* The Weather Channel */}
      <WeatherChannel />

      {/* Featured Destinations */}
      <FeaturedDestination />

      {/* Promo Content */}

      {/* Get a Quote */}
      <PromoQoute />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
