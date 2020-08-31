import React, { useEffect, useState } from 'react';

import StyledLink from '../../components/StyledLink';
import StoreSection from '../../components/StoreSection';
import AboutSection from '../../components/AboutSection';
import ContactSection from '../../components/ContactSection';
import FooterSection from '../../components/FooterSection';
import Header from '../../components/Header';

export default function Homepage() {
  

  return (
    <>
      <Header />
      <StoreSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
