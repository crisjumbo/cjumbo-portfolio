/*
 █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗
██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝
███████║██████╔╝██║   ██║██║   ██║   ██║   
██╔══██║██╔══██╗██║   ██║██║   ██║   ██║   
██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║   
╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝   
*/
import React, { useContext, useState } from 'react';
import { SMain, SSection, SButton, STextCard } from '../assets/styled/containers/About';
import AppContext from '../context/AppContext';

//-- Component About
const About: React.FC = () => {
  //-- Variables & Hooks
  const { state, displayText, noMovement } = useContext(AppContext);
  const textShowed = state?.textShowed;
  const [text, setText] = useState({
    profile: 'bold',
    skills: 'normal',
    education: 'normal',
    idioms: 'normal',
    technologies: 'normal',
  });
  //-- Functions & Handlers
  const handleClick = (name: string) => {
    setText({
      ...text,
      profile: 'normal',
      skills: 'normal',
      education: 'normal',
      idioms: 'normal',
      technologies: 'normal',
      [`${name}`]: 'bold',
    });
    displayText(name);
  };
  //-- Render of the component About
  return (
    <SMain>
      <SSection className="section">
        <div className="buttons-container">
          <SButton style={{ fontWeight: `${text.profile}` }} onClick={() => handleClick('profile')}>
            Who am I?
          </SButton>
          <SButton style={{ fontWeight: `${text.skills}` }} onClick={() => handleClick('skills')}>
            Skills
          </SButton>
          <SButton style={{ fontWeight: `${text.education}` }} onClick={() => handleClick('education')}>
            Education
          </SButton>
          <SButton style={{ fontWeight: `${text.idioms}` }} onClick={() => handleClick('idioms')}>
            Idioms
          </SButton>
          <SButton style={{ fontWeight: `${text.technologies}` }} onClick={() => handleClick('technologies')}>
            Technologies
          </SButton>
        </div>
        <STextCard>{textShowed.text}</STextCard>
      </SSection>
    </SMain>
  );
};

export default About;
