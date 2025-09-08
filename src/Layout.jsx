import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, showHeader = true, headerProps = {} }) => {
  return (
    <>
      <Navbar />
      {showHeader && <Header {...headerProps} />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
