import React, { Fragment } from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

import styles from '../SASS/Home.module.scss';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      <main className={styles.content}>{children}</main>
      <Footer/>
    </Fragment>
  );
};

export default Layout;
