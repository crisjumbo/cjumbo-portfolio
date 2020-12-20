import {keyframes} from 'styled-components';

export const pulseVanish = keyframes`
    0% {
      transform: scale(0.95);
      background-color: white;
      opacity: 75%;
    }
    100% {
      transform: scale(1.35);
      opacity: 0.5;
    }
  `;
