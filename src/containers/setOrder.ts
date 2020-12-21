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
const setOrder = (pathname: string): TransitionObject => {
  switch (pathname) {
    case '/projects':
      return {
        aboutPosition: '100%',
        projectsPosition: '0%',
        contactPosition: '-100%',
      };

    case '/about':
      return {
        aboutPosition: '0%',
        projectsPosition: '-100%',
        contactPosition: '100%',
      };

    case '/contact':
      return {
        aboutPosition: '-100%',
        projectsPosition: '100%',
        contactPosition: '0%',
      };

    default:
      return {
        message: 'This is an error message',
      };
  }
};

export default setOrder;
