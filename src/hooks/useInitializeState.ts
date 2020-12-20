import { useState } from 'react';
import { pathToFileURL } from 'url';
import initialState from '../initialState';

//-- Hook to Initialize the Storage value, it returns an object with state and reducers
const useInitializeState = () => {
  //-- Variables & Hooks
  const [state, setState] = useState(initialState);

  // -- Reducer to slide towards the page selected
  const slideTo = (path) => {
    setState({
      ...state,
      main: {
        location: path,
      },
    });
  };

  // -- Reducer to make no movement
  const noMovement = () => {
    setState({
      ...state,
      movement: { toRight: false, toLeft: false },
    });
  };
  // -- Reducer to slide toward the left
  const moveToLeft = (movement: boolean) => {
    setState({
      ...state,
      movement: { toRight: false, toLeft: movement },
    });
  };
  //-- Reducer to slide toward the right
  const moveToRight = (movement: boolean) => {
    setState({
      ...state,
      movement: { toRight: movement, toLeft: false },
    });
  };

  //-- Reducer to display block
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
  //-- Reducer to display none
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
  //-- Reducer to display Text
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

  //-- Object returned by the hook: State & Reducers
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
