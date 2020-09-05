import React, { useEffect, useState } from 'react';

import HomeSection from '../../components/Sections/HomeSection';
import StoreSection from '../../components/Sections/StoreSection';
import AboutSection from '../../components/Sections/AboutSection';
import ContactSection from '../../components/Sections/ContactSection';
import PrivateRoute from '../../components/PrivateRoute';
import { ProductService } from '../../services/product';

export default function Homepage() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await ProductService.readAll();

    setProducts(response);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <PrivateRoute>
      <HomeSection />
      <StoreSection products={products} />
      <AboutSection />
      <ContactSection />
    </PrivateRoute>
  );
}
