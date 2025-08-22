import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
