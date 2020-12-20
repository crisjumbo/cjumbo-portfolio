import { useState } from 'react';
import { LogoObject, TextObject } from 'types/app';
import initialState from '../initialState';
import { UseInitializeState } from '../types/app';

//-- Hook to Initialize the Storage value, it returns an object with state and reducers
const useInitializeState = (): UseInitializeState => {
  //-- Variables & Hooks
  const [state, setState] = useState(initialState);

  // -- Reducer to slide towards the page selected
  const slideTo = (path: string) => {
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
  const displayBlock = (name: string) => {
    state?.allLogos?.map((logo: LogoObject) => {
      logo.name === name &&
        setState({
          ...state,
          display: {
            id: logo.id,
            name: `${logo.name}`,
            src: `${logo.src}`,
            delay: `${logo.delay}`,
          },
        });
    });
  };
  //-- Reducer to display none
  const displayNone = () => {
    state?.allLogos?.map((logo) => {
      logo.name === 'brand logo' &&
        setState({
          ...state,
          display: {
            id: logo.id,
            name: `${logo.name}`,
            src: `${logo.src}`,
            delay: `${logo.delay}`,
          },
        });
    });
    /* Look for id 1 in allLogos array, copy-paste properties into display object */
  };
  //-- Reducer to display Text
  const displayText = (name: string) => {
    state?.allTexts?.map((logo: TextObject) => {
      logo.name === name &&
        setState({
          ...state,
          textShowed: {
            id: logo.id,
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
