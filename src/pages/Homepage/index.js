import React from 'react';

import HomeSection from '../../components/Sections/HomeSection';
import StoreSection from '../../components/Sections/StoreSection';
import AboutSection from '../../components/Sections/AboutSection';
import ContactSection from '../../components/Sections/ContactSection';

export default function Homepage() {
  return (
    <>
      <HomeSection />
      <StoreSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
