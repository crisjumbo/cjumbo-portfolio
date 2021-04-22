/*
██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
*/
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import {
  SMain,
  SSection,
  SCard,
  SCardHeader,
  SCardBody,
  CardBodyContainer,
  CardBodyFront,
  CardBodyBack,
  CardBodyImg,
} from '../styled/containers/Projects';
import { UseInitializeState } from 'types/app';

//-- Component Home
const Projects: React.FC = () => {
  const { state } = useContext<UseInitializeState>(AppContext);
  // -- handlers & functions
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    // e.stopPropagation(); // Handy if you want to prevent event bubbling to scrollable parent
    console.log({
      event: e,
      target: e.target, // Note 1* scrollTop is undefined on e.target
      currentTarget: e.currentTarget,
      scrollTop: e.currentTarget.scrollTop,
    });
  };
  //-- Render of the component Home
  return (
    <SMain onScroll={handleScroll}>
      <h2>Projects</h2>
      <SSection>
        {state?.projects
          ?.filter((item) => item.hot === true)
          .map((project) => (
            <SCard key={project.id}>
              <SCardHeader className="hot" href={project.src}>
                <span>Go to the project</span>
              </SCardHeader>
              <SCardBody>
                <CardBodyContainer>
                  <CardBodyFront>
                    <CardBodyImg src={project.img} alt={project.alt} />
                  </CardBodyFront>
                  <CardBodyBack>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </CardBodyBack>
                </CardBodyContainer>
              </SCardBody>
            </SCard>
          ))}
        {state?.projects
          ?.filter((item) => item.hot === false)
          .map((project) => (
            <SCard key={project.id}>
              <SCardHeader href={project.src}>
                <span>Go to the project</span>
              </SCardHeader>
              <SCardBody>
                <CardBodyContainer>
                  <CardBodyFront>
                    <CardBodyImg src={project.img} alt={project.alt} />
                  </CardBodyFront>
                  <CardBodyBack>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </CardBodyBack>
                </CardBodyContainer>
              </SCardBody>
            </SCard>
          ))}
      </SSection>
    </SMain>
  );
};

export default Projects;
