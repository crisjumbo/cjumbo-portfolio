/*
██╗███╗   ██╗██╗████████╗    ███████╗████████╗ █████╗ ████████╗███████╗
██║████╗  ██║██║╚══██╔══╝    ██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝
██║██╔██╗ ██║██║   ██║       ███████╗   ██║   ███████║   ██║   █████╗  
██║██║╚██╗██║██║   ██║       ╚════██║   ██║   ██╔══██║   ██║   ██╔══╝  
██║██║ ╚████║██║   ██║       ███████║   ██║   ██║  ██║   ██║   ███████╗
╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝       ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝
*/
export interface MainObject {
  location?: string | '' | undefined;
  center?: string;
  onLeft?: string;
  onRight?: string;
  relative?: string;
  absolute?: string;
}
interface DisplayObject {
  id?: number;
  name?: string;
  src?: string;
  delay?: string;
}
interface TextObject {
  id?: number;
  name?: string;
  text?: string;
  weight?: string;
}
interface MovementObject {
  name?: string;
  toRight?: boolean;
  toLeft?: boolean;
}
interface LogoObject {
  id?: number;
  name?: string;
  src?: string;
  delay?: string;
}
export interface AppState {
  main?: MainObject;
  display?: DisplayObject;
  textShowed?: TextObject;
  movement?: MovementObject;
  allMovements?: MovementObject[];
  allLogos?: LogoObject[];
  allTexts?: TextObject[];
}
/*
██╗  ██╗ ██████╗  ██████╗ ██╗  ██╗███████╗
██║  ██║██╔═══██╗██╔═══██╗██║ ██╔╝██╔════╝
███████║██║   ██║██║   ██║█████╔╝ ███████╗
██╔══██║██║   ██║██║   ██║██╔═██╗ ╚════██║
██║  ██║╚██████╔╝╚██████╔╝██║  ██╗███████║
╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝
*/
//-- useInitializeState
export interface UseInitializeState {
  state?: AppState;
  slideTo?: (path: string) => void;
  noMovement?: () => void;
  moveToRight?: (movement: boolean) => void;
  moveToLeft?: (movement: boolean) => void;
  displayBlock?: (name: string) => void;
  displayNone?: () => void;
  displayText?: (name: string) => void;
}
/*
 ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗ ██╗███╗   ██╗███████╗██████╗ ███████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██║████╗  ██║██╔════╝██╔══██╗██╔════╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║██╔██╗ ██║█████╗  ██████╔╝███████╗
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║██║╚██╗██║██╔══╝  ██╔══██╗╚════██║
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║██║██║ ╚████║███████╗██║  ██║███████║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚══════╝
*/
//-- PREHOME
// Nothing to Type
//-- SuperMain

export interface TransitionObject {
  aboutPosition?: string;
  aboutDisplay?: string;
  projectsPosition?: string;
  projectsDisplay?: string;
  contactPosition?: string;
  contactDisplay?: string;
  message?: string;
}
//-- About
export interface WeightObject {
  profile?: 'bold' | 'normal';
  skills?: 'bold' | 'normal';
  education?: 'bold' | 'normal';
  idioms?: 'bold' | 'normal';
  technologies?: 'bold' | 'normal';
}
