import { AppState } from './types/app';
/* State of the App Context */
const initialState: AppState = {
  main: {
    toLeft: false,
    toRight: false,
    center: '0%',
    onLeft: '-100%',
    onRight: '100%',
    relative: 'relative',
    absolute: 'absolute',
  },
  display: {
    id: 1,
    name: 'brand logo',
    src: '../assets/statics/logoChr.png',
    delay: '0s',
  },
  textShowed: {
    id: 1,
    name: 'profile',
    text: `My name is Critofher a young developer whose has been around technology all my life, so since one year I
    have been aporting to the open source community and helping others with my knowledge about programming
    languages. I enjoy building specially starting from cero, I do work hard and smart. My main Goal is to learn
    AI to teach and contribute in that recent field.`,
  },
  movement: {
    toRight: false,
    toLeft: false,
  },
  allMovements: [
    { name: 'toRight', toRight: true },
    { name: 'toLeft', toLeft: true },
    { name: 'noMovement', toRight: false, toLeft: false },
  ],
  allLogos: [
    { id: 1, name: 'brand logo', src: '../assets/statics/logoChr.png', delay: '0s' },
    { id: 2, name: 'instagram logo', src: '../assets/statics/logo6inst.png', delay: '1s' },
    { id: 3, name: 'github logo', src: '../assets/statics/logo6gith.png', delay: '1s' },
    { id: 4, name: 'linkedin logo', src: '../assets/statics/logo6link.png', delay: '1s' },
    { id: 5, name: 'facebook logo', src: '../assets/statics/logo6face.png', delay: '1s' },
  ],
  allTexts: [
    {
      id: 1,
      name: 'profile',
      text: `My name is Critofher a young developer whose has been around technology all my life, so since one year I
    have been aporting to the open source community and helping others with my knowledge about programming
    languages. I enjoy building specially starting from cero, I do work hard and smart. My main Goal is to learn
    AI to teach and contribute in that recent field.`,
    },
    {
      id: 2,
      name: 'skills',
      text: `I let my proyects talk for me, I dedicated them my deep attention and time looking to develope the best
    product in optimization, accessibility and easy to read for coders. In person I apply the same rules toward
    people, being respectful, dedicated and empathic among many.`,
    },
    {
      id: 3,
      name: 'education',
      text: `My professional life has a long trajectory and pretty diversity about fields, from huminities to science,
    this last one predominate so I studied Telecommunication in Madrid where I learned a lot about programing
    and electronic.`,
    },
    {
      id: 4,
      name: 'idioms',
      text: `Actually I am able to keep conversation in English, German and Spanish of course. I studied languages since
    I was pretty young. Nowadays, I keep learning new languages among them Turkish right now. Basically, knowing
    new languages makes me understand people and their culture.`,
    },
    {
      id: 5,
      name: 'technologies',
      text: `This porfolio is made in React, specially above the version 16.8 what it means that Hooks are present. I
    specialized in React. However, I frequently use other libraries like Angular, Vue and svelte with SASS and
    alternating between Materialize and Tailwind.`,
    },
  ],
};

export default initialState;
