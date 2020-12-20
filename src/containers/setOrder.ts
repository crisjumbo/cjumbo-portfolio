/*
████████╗██████╗  █████╗ ███╗   ██╗███████╗██╗████████╗██╗ ██████╗ ███╗   ██╗
╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██║╚══██╔══╝██║██╔═══██╗████╗  ██║
   ██║   ██████╔╝███████║██╔██╗ ██║███████╗██║   ██║   ██║██║   ██║██╔██╗ ██║
   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██║   ██║   ██║██║   ██║██║╚██╗██║
   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║   ██║   ██║╚██████╔╝██║ ╚████║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
*/
import { TransitionObject } from '../types/app';
//-- Login of how to Organize the Components within the Main
const setOrder = (pathname: string | ''): TransitionObject => {
  switch (pathname) {
    case '/projects':
      return {
        aboutPosition: '100%',
        aboutDisplay: 'none',
        projectsPosition: '0%',
        projectsDisplay: 'block',
        contactPosition: '-100%',
        contactDisplay: 'none',
      };

    case '/about':
      return {
        aboutPosition: '0%',
        aboutDisplay: 'block',
        projectsPosition: '-100%',
        projectsDisplay: 'none',
        contactPosition: '100%',
        contactDisplay: 'none',
      };

    case '/contact':
      return {
        aboutPosition: '-100%',
        aboutDisplay: 'none',
        projectsPosition: '100%',
        projectsDisplay: 'none',
        contactPosition: '100%',
        contactDisplay: 'block',
      };

    default:
      return {
        message: 'This is an error message',
      };
  }
};

export default setOrder;
