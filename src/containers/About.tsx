/*
 █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗
██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝
███████║██████╔╝██║   ██║██║   ██║   ██║   
██╔══██║██╔══██╗██║   ██║██║   ██║   ██║   
██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║   
╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝   
*/
import React, { useContext, useState } from 'react';
//-- Hooks
import AppContext from '../context/AppContext';
//-- Components
import { SMain, SSection, SButton, STextCard } from '../styled/containers/About';
import { UseInitializeState, WeightObject } from 'types/app';

//-- Component About
const About: React.FC = () => {
  //-- Variables & Hooks
  const { state, displayText } = useContext<UseInitializeState>(AppContext);
  const textShowed = state?.textShowed;
  const [text, setText] = useState<WeightObject>({
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
    displayText && displayText(name);
  };
  //-- Render of the component About
  return (
    <SMain>
      <SSection className="section">
        <div className="buttons-container">
          <SButton style={{ fontWeight: text.profile }} onClick={() => handleClick('profile')}>
            Who am I?
          </SButton>
          <SButton style={{ fontWeight: text.skills }} onClick={() => handleClick('skills')}>
            Skills
          </SButton>
          <SButton style={{ fontWeight: text.education }} onClick={() => handleClick('education')}>
            Education
          </SButton>
          <SButton style={{ fontWeight: text.idioms }} onClick={() => handleClick('idioms')}>
            Idioms
          </SButton>
          <SButton style={{ fontWeight: text.technologies }} onClick={() => handleClick('technologies')}>
            Technologies
          </SButton>
        </div>
        <STextCard>{textShowed?.text}</STextCard>
      </SSection>
    </SMain>
  );
};

export default About;
