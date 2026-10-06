import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuoteBanner from './components/QuoteBanner';
import PMSuryaGhar from './components/PMSuryaGhar';
import ValuesBanner from './components/ValuesBanner';
import WhySolar from './components/WhySolar';
import SmartHomeBanner from './components/SmartHomeBanner';
import SolarTypes from './components/SolarTypes';
import PowerBanner from './components/PowerBanner';
import WhyChooseUs from './components/WhyChooseUs';
import InfiniteBanner from './components/InfiniteBanner';
import Features from './components/Features';
import SolutionsTransition from './components/SolutionsTransition';
import AboutUs from './components/AboutUs';
import FinalQuoteBanner from './components/FinalQuoteBanner';
import ContactUs from './components/ContactUs';
import PreFooterTransition from './components/PreFooterTransition';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <QuoteBanner />
      <PMSuryaGhar />
      <ValuesBanner />
      <WhySolar />
      <SmartHomeBanner />
      <SolarTypes />
      <PowerBanner />
      <WhyChooseUs />
      <InfiniteBanner />
      <Features />
      <SolutionsTransition />
      <AboutUs />
      <FinalQuoteBanner />
      <ContactUs />
      <PreFooterTransition />
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Home;
