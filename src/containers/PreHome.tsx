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

const FB_ID: string | undefined = process.env.ID_APP_FACEBOOK;
//-- PreHome Component
const PreHome: React.FC = () => {
  //-- Render of the component
  return (
    <>
      <Helmet>
        <title>Chr.Jimenez - Home</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Ayton_que" />
        <meta name="twitter:creator" content="@Ayton_que" />
        <meta name="twitter:title" content="Chr Jimenez" />
        <meta name="twitter:description" content="Cristofher Jimenez Portfolio" />
        <meta name="twitter:image" content="https://i.ibb.co/1RQy2kV/card-chr-jimenez.png" />
        <meta property="og:title" content="Chr Jimenez" />
        <meta property="og:description" content="Cristofher Jimenez Portfolio" />
        <meta property="og:image" content="https://i.ibb.co/1RQy2kV/card-chr-jimenez.png" />
        <meta property="og:url" content="chr-jimenez.com" />
        <meta property="og:site_name" content="Chr jimenez" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content={FB_ID} />
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
