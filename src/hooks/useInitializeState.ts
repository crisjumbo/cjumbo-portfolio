import { useState } from 'react';
import { pathToFileURL } from 'url';
import initialState from '../initialState';

const useInitializeState = () => {
  const [state, setState] = useState(initialState);

  // --
  const slideTo = (path) => {
    setState({
      ...state,
      main: {
        location: path,
      },
    });
  };

  // --
  const noMovement = () => {
    setState({
      ...state,
      movement: { toRight: false, toLeft: false },
    });
  };
  const moveToLeft = (movement: boolean) => {
    setState({
      ...state,
      movement: { toRight: false, toLeft: movement },
    });
  };

  const moveToRight = (movement: boolean) => {
    setState({
      ...state,
      movement: { toRight: movement, toLeft: false },
    });
  };

  //--
  const displayBlock = (name) => {
    state.allLogos.map((logo) => {
      logo.name === name &&
        setState({
          ...state,
          display: {
            id: `${logo.id}`,
            name: `${logo.name}`,
            src: `${logo.src}`,
            delay: `${logo.delay}`,
          },
        });
    });
  };
  const displayNone = () => {
    state.allLogos.map((logo) => {
      logo.name === 'brand logo' &&
        setState({
          ...state,
          display: {
            id: `${logo.id}`,
            name: `${logo.name}`,
            src: `${logo.src}`,
            delay: `${logo.delay}`,
          },
        });
    });
    /* Look for id 1 in allLogos array, copy-paste properties into display object */
  };
  const displayText = (name) => {
    state.allTexts.map((logo) => {
      logo.name === name &&
        setState({
          ...state,
          textShowed: {
            id: `${logo.id}`,
            name: `${logo.name}`,
            text: `${logo.text}`,
            weight: 'bold',
          },
        });
    });
  };

  return {
    state,
    slideTo,
    noMovement,
    moveToRight,
    moveToLeft,
    displayBlock,
    displayNone,
    displayText,
  };
};

export default useInitializeState;
