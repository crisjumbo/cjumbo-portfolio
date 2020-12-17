import React from 'react';
import { StyledLayout } from '../assets/styled/layouts';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props: { children: JSX.Element }): JSX.Element => {
  return (
    <StyledLayout>
      <Navbar />
      {props.children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
