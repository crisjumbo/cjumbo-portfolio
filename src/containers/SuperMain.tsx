import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { useLocation } from 'react-router-dom';

import { SSuperMain } from '../assets/styled/containers/SuperMain';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import setOrder from './setOrder';

//-- Component Main of the Portfolio
const SuperMain: React.FC = () => {
  //-- Variables & hooks
  const { state } = useContext(AppContext);
  const { pathname } = useLocation();
  const [style, setStyle] = useState(setOrder(pathname));
  const main = state?.main;
  const location = main?.location;
  useEffect(() => {
    const layout = setOrder(location);
    setStyle({
      ...style,
      aboutPosition: `${layout.aboutPosition}`,
      aboutDisplay: `${layout.aboutDisplay}`,
      projectsPosition: `${layout.projectsPosition}`,
      projectsDisplay: `${layout.projectsDisplay}`,
      contactPosition: `${layout.contactPosition}`,
      contactDisplay: `${layout.contactDisplay}`,
    });
  }, [location, style]);
  // This solution for this is to trigger the backward or forward keys
  // || Another solution that evolves the render is with an effect with two different parameter
  // location and pathname.

  //-- Component Render
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
