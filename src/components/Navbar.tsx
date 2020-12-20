/*
███╗   ██╗ █████╗ ██╗   ██╗██████╗  █████╗ ██████╗ 
████╗  ██║██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔══██╗
██╔██╗ ██║███████║██║   ██║██████╔╝███████║██████╔╝
██║╚██╗██║██╔══██║╚██╗ ██╔╝██╔══██╗██╔══██║██╔══██╗
██║ ╚████║██║  ██║ ╚████╔╝ ██████╔╝██║  ██║██║  ██║
╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
*/
import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import {
  StyledHeader,
  StyledNav,
  SubNav,
  Logo,
  StyledList,
  LogoContainer,
  StyledButton,
} from '../assets/styled/components/Navbar';

import logo6 from '../assets/statics/logoChr.png';
import contactLogo from '../assets/statics/ContactLogo.png';
import aboutLogo from '../assets/statics/AboutLogo.png';
import logo6face from '../assets/statics/logo6face.png';
import logo6link from '../assets/statics/logo6link.png';
import logo6inst from '../assets/statics/logo6inst.png';
import logo6gith from '../assets/statics/logo6gith.png';
//-- Component Navbar
const Navbar: React.FC = () => {
  //-- Variables & Hooks
  const { state, displayBlock, displayNone, moveToLeft, moveToRight, noMovement, renderExtra, slideTo } = useContext(
    AppContext,
  );
  const [logo, setLogo] = useState({
    opacity: '1',
  });
  const { pathname } = useLocation();
  const history = useHistory();
  useEffect(() => {
    slideTo(pathname);
  }, [pathname, slideTo]);

  const display = state?.display;
  const handleDisplayBlock = (media) => {
    // make opacity from 1-0
    setLogo({
      opacity: '0',
    });
    setTimeout(() => {
      displayBlock(media);
      setLogo({
        opacity: '1',
      });
    }, 1000);
  };
  //-- Functions & Handler
  const handleToAbout = (e) => {
    e.preventDefault();
    //If i am in about disable this button
    switch (pathname) {
      case '/about':
        return console.log('paths are the same Do nothing  ');
      case '/projects':
        setTimeout(() => slideTo('/about'), 1000);
        return setTimeout(() => history.push('/about'), 5000);
      case '/contact':
        renderExtra('about');
        return history.push('/about');
      default:
        return console.log('The path introduced is wrong');
    }
  };
  const handleToContact = (e) => {
    e.preventDefault();
    history.push('/contact');
    //If I am in contact disable this button
    switch (pathname) {
      case '/contact':
        return console.log('paths are the same Do nothing');
      case '/projects':
        return console.log('Contact page from left to right');
      case '/about':
        return console.log('Contact page from right to left');
      default:
        return console.log('The path introduced is wrong');
    }
  };
  const handleToProjects = (e) => {
    e.preventDefault();
    history.push('/projects');
    //If I am in projects desable this button
    switch (pathname) {
      case '/projects':
        return console.log('paths are the same Do nothing');
      case '/contact':
        return console.log('Projects page from right to left');
      case '/about':
        return console.log('Projects page from left to right');
      default:
        return console.log('The path introduced is wrong');
    }
  };
  const handleDisplayNone = () => {
    //make opacity from 0-1
    setLogo({
      opacity: '0',
    });
    setTimeout(() => {
      displayNone();
      setLogo({
        opacity: '1',
      });
    }, 1000);
  };
  //-- Render of the component Navbar
  return (
    <StyledHeader>
      <StyledNav>
        <StyledList>
          <li>
            <StyledButton
              onMouseOver={() => handleDisplayBlock('instagram logo')}
              onMouseOut={() => handleDisplayNone()}
            >
              Instagram
            </StyledButton>
          </li>
          <li>
            <StyledButton onMouseOver={() => handleDisplayBlock('github logo')} onMouseOut={() => handleDisplayNone()}>
              GitHub
            </StyledButton>
          </li>
        </StyledList>
        <LogoContainer to="/projects" onClick={(e) => handleToProjects(e)}>
          <Logo
            style={{ transitionProperty: 'opacity', transitionDuration: '1s', opacity: `${logo.opacity}` }}
            className={display.delay}
            src={display.src}
            alt={display.name}
          />
        </LogoContainer>
        <StyledList>
          <li>
            <StyledButton
              onMouseOver={() => handleDisplayBlock('linkedin logo')}
              onMouseOut={() => handleDisplayNone()}
            >
              Linkedin
            </StyledButton>
          </li>
          <li>
            <StyledButton
              onMouseOver={() => handleDisplayBlock('facebook logo')}
              onMouseOut={() => handleDisplayNone()}
            >
              Facebook
            </StyledButton>
          </li>
        </StyledList>
      </StyledNav>
      <SubNav>
        <Link to="/contact" onClick={(e) => handleToContact(e)}>
          <Logo src={contactLogo} alt="contact logo button" />
        </Link>
        <Link to="/about" onClick={(e) => handleToAbout(e)}>
          <Logo src={aboutLogo} alt="about logo button" />
        </Link>
      </SubNav>
    </StyledHeader>
  );
};

export default Navbar;
