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

// import logo6 from '../assets/statics/logoChr.png';
// import contactLogo from '../assets/statics/ContactLogo.png';
// import aboutLogo from '../assets/statics/AboutLogo.png';
// import brandLogo from '../assets/statics/logoChr.png';
import { UseInitializeState } from 'types/app';
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
  const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
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
              href="https://twitter.com/Ayton_que"
              className="instagram"
              onMouseOver={() => handleDisplayBlock('instagram logo')}
              onMouseOut={() => handleDisplayNone()}
            >
              Twitter
            </StyledButton>
          </li>
          <li>
            <StyledButton
              href="https://github.com/Tonnraus"
              className="github"
              onMouseOver={() => handleDisplayBlock('github logo')}
              onMouseOut={() => handleDisplayNone()}
            >
              GitHub
            </StyledButton>
          </li>
        </StyledList>
        {width > 900 && (
          // Logo appears when the screen is over 900px
          <LogoContainer to="/projects" onClick={(e) => handleToProjects(e)}>
            <Logo
              style={{ transitionProperty: 'opacity', transitionDuration: '1s', opacity: `${logo.opacity}` }}
              className={display?.delay}
              src={display?.src}
              alt={display?.name}
            />
          </LogoContainer>
        )}
        <StyledList>
          <li>
            <StyledButton
              href="https://www.linkedin.com/in/cristofher-jumbo-jimenez-168203187/"
              className="linkedin"
              onMouseOver={() => handleDisplayBlock('linkedin logo')}
              onMouseOut={() => handleDisplayNone()}
            >
              Linkedin
            </StyledButton>
          </li>
          <li>
            <StyledButton
              href="https://www.facebook.com/Cristofher.Jumbo"
              className="facebook"
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
          <Logo src="https://i.ibb.co/BGkpqXm/Contact-Logo.png" alt="contact logo button" />
        </Link>
        {
          // Here loco when the screen reachs 900px
          width < 900 && (
            <Link to="/projects" onClick={(e) => handleToProjects(e)}>
              <Logo src="https://i.ibb.co/1ZhmVH5/icon.png" alt="Brand Logo" />
            </Link>
          )
        }
        <Link to="/about" onClick={(e) => handleToAbout(e)}>
          <Logo src="https://i.ibb.co/x67nXPX/About-Logo.png" alt="about logo button" />
        </Link>
      </SubNav>
    </StyledHeader>
  );
};

export default Navbar;
