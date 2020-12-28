/*
██╗      █████╗ ██╗   ██╗ ██████╗ ██╗   ██╗████████╗
██║     ██╔══██╗╚██╗ ██╔╝██╔═══██╗██║   ██║╚══██╔══╝
██║     ███████║ ╚████╔╝ ██║   ██║██║   ██║   ██║   
██║     ██╔══██║  ╚██╔╝  ██║   ██║██║   ██║   ██║   
███████╗██║  ██║   ██║   ╚██████╔╝╚██████╔╝   ██║   
╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝  ╚═════╝    ╚═╝   
*/
import React from 'react';
import { StyledLayout } from '../styled/layouts';
import Navbar from './Navbar';
import Footer from './Footer';
//-- Component Layout
const Layout = (props: { children: JSX.Element }): JSX.Element => {
  //-- Render of the component Layout
  return (
    <StyledLayout>
      <Navbar />
      {props.children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
