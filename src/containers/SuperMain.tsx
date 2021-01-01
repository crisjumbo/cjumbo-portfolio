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
import { SSuperMain } from '../styled/containers/SuperMain';
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
  const [style, setStyle] = useState(setOrder(pathname));
  // play with the fucking transition because that is what is killing you
  const slideTo = () => {
    if (!main?.toLeft && !main?.toRight) {
      return undefined;
    }
    if (main?.toLeft) {
      return {
        transform: 'translateX(-100vw)',
        transitionProperty: 'transform',
        transitionDuration: '1s',
        transitionTimingFunction: 'linear',
      };
    }
    if (main?.toRight) {
      return {
        transform: 'translateX(100vw)',
        transitionProperty: 'transform',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'linear',
      };
    }
  };
  useEffect(() => {
    setStyle(setOrder(pathname));
  }, [pathname]);
  // -- Component Render
  return (
    <SSuperMain>
      <div className="super-container" style={slideTo()}>
        <div
          className="div_container projects"
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
      </div>
    </SSuperMain>
  );
};

export default SuperMain;
