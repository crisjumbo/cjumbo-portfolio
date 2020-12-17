import React from 'react';
import { SMain, SWrapper, SImg, SLink } from '../assets/styled/PreHome';

// const personalLogo = require('../assets/statics/logoChr.png');
import PersonalLogo from '../assets/statics/logoChr.png';

const PreHome: React.FC = () => {
  return (
    <SMain>
      <SWrapper>
        <SLink to="/projects">
          <SImg src={PersonalLogo} alt="Personal Logo" />
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
