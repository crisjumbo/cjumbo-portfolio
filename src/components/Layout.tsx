/*
██╗      █████╗ ██╗   ██╗ ██████╗ ██╗   ██╗████████╗
██║     ██╔══██╗╚██╗ ██╔╝██╔═══██╗██║   ██║╚══██╔══╝
██║     ███████║ ╚████╔╝ ██║   ██║██║   ██║   ██║   
██║     ██╔══██║  ╚██╔╝  ██║   ██║██║   ██║   ██║   
███████╗██║  ██║   ██║   ╚██████╔╝╚██████╔╝   ██║   
╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝  ╚═════╝    ╚═╝   
*/
import React, { useContext } from 'react';
import { StyledLayout } from '../assets/styled/layouts';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import AppContext from 'context/AppContext';

//-- Component Layout
const Layout = (props: { children: JSX.Element }): JSX.Element => {
  // const { state } = useContext(AppContext);
  // const main = state?.main;
  // const { pathname } = useLocation();

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
