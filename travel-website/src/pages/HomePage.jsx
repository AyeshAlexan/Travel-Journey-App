import React from 'react';
import HeroSection from '../components/HeroSection';
import TrendingSection from '../components/TrendingSection';
import PlanYourTrip from '../components/PlanYourTrip';
import TopDestinations from '../components/TopDestinations';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const HomePage = () => {
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

export default HomePage;
