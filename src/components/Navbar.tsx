/*
███╗   ██╗ █████╗ ██╗   ██╗██████╗  █████╗ ██████╗ 
████╗  ██║██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔══██╗
██╔██╗ ██║███████║██║   ██║██████╔╝███████║██████╔╝
██║╚██╗██║██╔══██║╚██╗ ██╔╝██╔══██╗██╔══██║██╔══██╗
██║ ╚████║██║  ██║ ╚████╔╝ ██████╔╝██║  ██║██║  ██║
╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
*/
import React, { useContext, useState } from 'react';
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

// import logo6 from '../assets/statics/logoChr.png';
import contactLogo from '../assets/statics/ContactLogo.png';
import aboutLogo from '../assets/statics/AboutLogo.png';
import { UseInitializeState } from 'types/app';
// import logo6face from '../assets/statics/logo6face.png';
// import logo6link from '../assets/statics/logo6link.png';
// import logo6inst from '../assets/statics/logo6inst.png';
// import logo6gith from '../assets/statics/logo6gith.png';
//-- Component Navbar
const Navbar: React.FC = () => {
  //-- Variables & Hooks
  const { state, displayBlock, displayNone, slideToLeft, slideToRight, noSlide } = useContext<UseInitializeState>(
    AppContext,
  );
  const display = state?.display;
  const { pathname } = useLocation();
  const history = useHistory();
  const [logo, setLogo] = useState({
    opacity: '1',
  });
  /*
██╗███╗   ██╗███████╗██╗███╗   ██╗██╗████████╗███████╗    ██╗      ██████╗  ██████╗ ██████╗ 
██║████╗  ██║██╔════╝██║████╗  ██║██║╚══██╔══╝██╔════╝    ██║     ██╔═══██╗██╔═══██╗██╔══██╗
██║██╔██╗ ██║█████╗  ██║██╔██╗ ██║██║   ██║   █████╗      ██║     ██║   ██║██║   ██║██████╔╝
██║██║╚██╗██║██╔══╝  ██║██║╚██╗██║██║   ██║   ██╔══╝      ██║     ██║   ██║██║   ██║██╔═══╝ 
██║██║ ╚████║██║     ██║██║ ╚████║██║   ██║   ███████╗    ███████╗╚██████╔╝╚██████╔╝██║     
╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝   ╚══════╝    ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝     
*/
  const handleDisplayBlock = (media: string) => {
    // make opacity from 1-0
    setLogo({
      opacity: '0',
    });
    setTimeout(() => {
      displayBlock && displayBlock(media);
      setLogo({
        opacity: '1',
      });
    }, 1000);
  };
  //-- Functions & Handler
  const handleToAbout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    switch (pathname) {
      case '/about':
        return console.log('nothing to do');
      case '/projects':
        slideToLeft && slideToLeft();
        return setTimeout(() => {
          history.push('/about');
          noSlide && noSlide();
        }, 1100);
      case '/contact':
        slideToRight && slideToRight();
        return setTimeout(() => {
          history.push('/about');
          noSlide && noSlide();
        }, 1100);
      default:
        return console.log('The path introduced is wrong');
    }
  };
  const handleToContact = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    switch (pathname) {
      case '/contact':
        return console.log('paths are the same Do nothing');
      case '/projects':
        slideToRight && slideToRight();
        return setTimeout(() => {
          history.push('/contact');
          noSlide && noSlide();
        }, 1100);
      case '/about':
        slideToLeft && slideToLeft();
        return setTimeout(() => {
          history.push('/contact');
          noSlide && noSlide();
        }, 1100);
      default:
        return console.log('The path introduced is wrong');
    }
  };
  const handleToProjects = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    switch (pathname) {
      case '/projects':
        return console.log('paths are the same Do nothing');
      case '/contact':
        slideToLeft && slideToLeft();
        return setTimeout(() => {
          history.push('/projects');
          noSlide && noSlide();
        }, 1100);
      case '/about':
        slideToRight && slideToRight();
        return setTimeout(() => {
          history.push('/projects');
          noSlide && noSlide();
        }, 1100);
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
      if (displayNone) {
        displayNone();
        setLogo({
          opacity: '1',
        });
      }
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
            className={display?.delay}
            src={display?.src}
            alt={display?.name}
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
