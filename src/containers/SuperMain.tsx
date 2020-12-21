/*
███████╗██╗   ██╗██████╗ ███████╗██████╗     ███╗   ███╗ █████╗ ██╗███╗   ██╗
██╔════╝██║   ██║██╔══██╗██╔════╝██╔══██╗    ████╗ ████║██╔══██╗██║████╗  ██║
███████╗██║   ██║██████╔╝█████╗  ██████╔╝    ██╔████╔██║███████║██║██╔██╗ ██║
╚════██║██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗    ██║╚██╔╝██║██╔══██║██║██║╚██╗██║
███████║╚██████╔╝██║     ███████╗██║  ██║    ██║ ╚═╝ ██║██║  ██║██║██║ ╚████║
╚══════╝ ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝
*/
//-- Dependencies
import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { useLocation } from 'react-router-dom';
//-- Components & Types
import { SSuperMain } from '../assets/styled/containers/SuperMain';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import setOrder from './setOrder';
import { UseInitializeState } from 'types/app';

//-- Component Main of the Portfolio
const SuperMain: React.FC = () => {
  //-- Variables & hooks
  const { state } = useContext<UseInitializeState>(AppContext);
  const main = state?.main;
  const { pathname } = useLocation();
  const location = main?.location;
  // const styleObject = setOrder(pathname);
  console.log(pathname); // it is making log two ti
  console.log(location);
  const [style, setStyle] = useState(setOrder(pathname));
  /*
██╗███╗   ██╗███████╗██╗███╗   ██╗██╗████████╗███████╗    ██╗      ██████╗  ██████╗ ██████╗ 
██║████╗  ██║██╔════╝██║████╗  ██║██║╚══██╔══╝██╔════╝    ██║     ██╔═══██╗██╔═══██╗██╔══██╗
██║██╔██╗ ██║█████╗  ██║██╔██╗ ██║██║   ██║   █████╗      ██║     ██║   ██║██║   ██║██████╔╝
██║██║╚██╗██║██╔══╝  ██║██║╚██╗██║██║   ██║   ██╔══╝      ██║     ██║   ██║██║   ██║██╔═══╝ 
██║██║ ╚████║██║     ██║██║ ╚████║██║   ██║   ███████╗    ███████╗╚██████╔╝╚██████╔╝██║     
╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝   ╚══════╝    ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝     
*/
  useEffect(() => {
    location ? setStyle(setOrder(location)) : setStyle(setOrder(pathname));
  }, [location, pathname]);
  // -- Component Render
  return (
    <SSuperMain>
      <div
        className="div_container"
        style={{
          transform: `translateX(${style.projectsPosition})`,
        }}
      >
        <Projects />
      </div>
      <div
        className="div_container"
        style={{
          transform: `translateX(${style.contactPosition})`,
        }}
      >
        <Contact />
      </div>
      <div
        className="div_container"
        style={{
          transform: `translateX(${style.aboutPosition})`,
        }}
      >
        <About />
      </div>
    </SSuperMain>
  );
};

export default SuperMain;
