/*
██████╗ ██████╗ ███████╗██╗  ██╗ ██████╗ ███╗   ███╗███████╗
██╔══██╗██╔══██╗██╔════╝██║  ██║██╔═══██╗████╗ ████║██╔════╝
██████╔╝██████╔╝█████╗  ███████║██║   ██║██╔████╔██║█████╗  
██╔═══╝ ██╔══██╗██╔══╝  ██╔══██║██║   ██║██║╚██╔╝██║██╔══╝  
██║     ██║  ██║███████╗██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗
╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
*/
import React from 'react';
import { SMain, SWrapper, SImg, SLink } from '../styled/containers/PreHome';
import { Helmet } from 'react-helmet';

//-- PreHome Component
const PreHome: React.FC = () => {
  //-- Render of the component
  return (
    <>
      <Helmet>
        <title>Chr.jimenez</title>
      </Helmet>
      <SMain>
        <SWrapper>
          <SLink to="/projects">
            <SImg src={'https://i.ibb.co/1ZhmVH5/icon.png'} alt="Personal Logo" />
          </SLink>
          <p>
            Helloª, I am Cristofher a web developer.
            <br />
            As goal, the future. As language, technology.
          </p>
        </SWrapper>
      </SMain>
    </>
  );
};

export default PreHome;
