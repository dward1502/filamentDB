import React, { Fragment } from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <Fragment>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2022 Daniel Ward. All Rights Reserved</p>
      </footer>
    </Fragment>
  );
};

export default Footer;
