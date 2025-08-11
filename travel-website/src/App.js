import React from 'react';
import HeroSection from './components/HeroSection';
import TrendingSection from './components/TrendingSection';
import TopDestinations from './components/TopDestinations';
import PlanYourTrip from './components/PlanYourTrip';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <HeroSection />
      <TrendingSection />
      <PlanYourTrip />
      <TopDestinations />
      <Reviews />
      <Footer />  

    </>
  );
};

export default App;
