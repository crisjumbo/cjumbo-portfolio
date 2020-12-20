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
  SSeeMore,
} from '../assets/styled/Home';

import togologo from '../assets/statics/togologo.png';
import project1 from '../assets/statics/project1.png';
import project2 from '../assets/statics/project2.png';
import project3 from '../assets/statics/project3.jpg';

//-- Component Home
const Projects: React.FC = () => {
  //-- Variables & Hooks
  const { state } = useContext(AppContext);
  const main = state?.main;
  const position = main.current;

  //-- Render of the component Home
  return (
    <SMain>
      <h2>Projects</h2>
      <SSection>
        <SCard>
          <SCardHeader href="https://github.com/Tonnraus/Light-Dark-Mode">
            <span>Go to the project</span>
          </SCardHeader>
          <SCardBody>
            <CardBodyContainer>
              <CardBodyFront>
                <CardBodyImg src={project1} alt="Dark Light theme project" />
              </CardBodyFront>
              <CardBodyBack>
                <h3>Project&aposs description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus nunc, faucibus ut purus eu,
                  porttitor euismod mi. Pellentesque aliquet est sapien, sed efficitur velit rutrum vitae. Nulla
                  facilisi. Cras sem ipsum, fermentum laoreet dignissim ac, rutrum a ipsum. In sed convallis leo.
                  Praesent egestas ultrices nibh, vitae molestie massa. Nulla volutpat vehicula nisi, faucibus tincidunt
                  nulla suscipit eu. Duis vel dapibus nisl, id hendrerit nisi. Nulla mauris risus, pretium vitae sapien
                  et, consectetur feugiat nibh.
                </p>
              </CardBodyBack>
            </CardBodyContainer>
          </SCardBody>
        </SCard>
        <SCard>
          <SCardHeader href="https://github.com/Tonnraus/Light-Dark-Mode">
            <span>Go to Project</span>
          </SCardHeader>
          <SCardBody>
            <CardBodyContainer>
              <CardBodyFront>
                <CardBodyImg src={project2} alt="Simon says project" />
              </CardBodyFront>
              <CardBodyBack>
                <h3>Project&aposs description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus nunc, faucibus ut purus eu,
                  porttitor euismod mi. Pellentesque aliquet est sapien, sed efficitur velit rutrum vitae. Nulla
                  facilisi. Cras sem ipsum, fermentum laoreet dignissim ac, rutrum a ipsum. In sed convallis leo.
                  Praesent egestas ultrices nibh, vitae molestie massa. Nulla volutpat vehicula nisi, faucibus tincidunt
                  nulla suscipit eu. Duis vel dapibus nisl, id hendrerit nisi. Nulla mauris risus, pretium vitae sapien
                  et, consectetur feugiat nibh.
                </p>
              </CardBodyBack>
            </CardBodyContainer>
          </SCardBody>
        </SCard>
        <SCard>
          <SCardHeader href="https://github.com/Tonnraus/Light-Dark-Mode">
            <span>Go to the project</span>
          </SCardHeader>
          <SCardBody>
            <CardBodyContainer>
              <CardBodyFront>
                <CardBodyImg src={project3} alt="SPA RickandMorty project" />
              </CardBodyFront>
              <CardBodyBack>
                <h3>Project&aposs description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus nunc, faucibus ut purus eu,
                  porttitor euismod mi. Pellentesque aliquet est sapien, sed efficitur velit rutrum vitae. Nulla
                  facilisi. Cras sem ipsum, fermentum laoreet dignissim ac, rutrum a ipsum. In sed convallis leo.
                  Praesent egestas ultrices nibh, vitae molestie massa. Nulla volutpat vehicula nisi, faucibus tincidunt
                  nulla suscipit eu. Duis vel dapibus nisl, id hendrerit nisi. Nulla mauris risus, pretium vitae sapien
                  et, consectetur feugiat nibh.
                </p>
              </CardBodyBack>
            </CardBodyContainer>
          </SCardBody>
        </SCard>
        <SSeeMore>{'more projects'}</SSeeMore>
      </SSection>
    </SMain>
  );
};

export default Projects;
