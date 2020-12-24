/*
██████╗ ██████╗ ███████╗██╗  ██╗ ██████╗ ███╗   ███╗███████╗
██╔══██╗██╔══██╗██╔════╝██║  ██║██╔═══██╗████╗ ████║██╔════╝
██████╔╝██████╔╝█████╗  ███████║██║   ██║██╔████╔██║█████╗  
██╔═══╝ ██╔══██╗██╔══╝  ██╔══██║██║   ██║██║╚██╔╝██║██╔══╝  
██║     ██║  ██║███████╗██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗
╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
*/
import React from 'react';
import { SMain, SWrapper, SImg, SLink } from '../assets/styled/containers/PreHome';
// const personalLogo = require('../assets/statics/logoChr.png');
// import PersonalLogo from '../assets/statics/logoChr.png';

//-- PreHome Component
const PreHome: React.FC = () => {
  //-- Render of the component
  return (
    <SMain>
      <SWrapper>
        <SLink to="/projects">
          <SImg src={''} alt="Personal Logo" />
        </SLink>
        <p>
          Helloª, I am Cristofher a web developer.
          <br />
          As goal, the future. As language, technology.
        </p>
      </SWrapper>
    </SMain>
  );
};

export default PreHome;
