import React, { Fragment } from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      <main>{children}</main>
      <Footer/>
    </Fragment>
  );
};

export default Layout;
