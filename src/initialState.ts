import { AppState } from './types/app';
/* State of the App Context */
import brandLogo from './assets/statics/logoChr.png';
import facebookLogo from './assets/statics/logo6face.png';
import twitterLogo from './assets/statics/logo6twit.png';
import githubLogo from './assets/statics/logo6gith.png';
import linkedinLogo from './assets/statics/logo6link.png';
// -- Project images
import project1 from './assets/statics/project1.png';
import project2 from './assets/statics/project2.png';
import project3 from './assets/statics/project3.jpg';
import noImageYet from './assets/statics/NoImageYet.png';

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
    src: brandLogo,
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
    { id: 1, name: 'brand logo', src: brandLogo, delay: '0s' },
    { id: 2, name: 'instagram logo', src: twitterLogo, delay: '1s' },
    { id: 3, name: 'github logo', src: githubLogo, delay: '1s' },
    { id: 4, name: 'linkedin logo', src: linkedinLogo, delay: '1s' },
    { id: 5, name: 'facebook logo', src: facebookLogo, delay: '1s' },
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
  projects: [
    {
      id: 1,
      title: 'Projecto 1',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus nunc, faucibus ut purus eu,
      porttitor euismod mi. Pellentesque aliquet est sapien, sed efficitur velit rutrum vitae. Nulla
      facilisi. Cras sem ipsum, fermentum laoreet dignissim ac, rutrum a ipsum. In sed convallis leo.
      Praesent egestas ultrices nibh, vitae molestie massa. Nulla volutpat vehicula nisi, faucibus tincidunt
      nulla suscipit eu. Duis vel dapibus nisl, id hendrerit nisi. Nulla mauris risus, pretium vitae sapien
      et, consectetur feugiat nibh.`,
      src: 'https://github.com/Tonnraus/Light-Dark-Mode',
      img: project1,
      alt: 'Social Media Dashboard',
      hot: false,
    },
    {
      id: 2,
      title: 'Chrommerce shop',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus nunc, faucibus ut purus eu,
      porttitor euismod mi. Pellentesque aliquet est sapien, sed efficitur velit rutrum vitae. Nulla
      facilisi. Cras sem ipsum, fermentum laoreet dignissim ac, rutrum a ipsum. In sed convallis leo.
      Praesent egestas ultrices nibh, vitae molestie massa. Nulla volutpat vehicula nisi, faucibus tincidunt
      nulla suscipit eu. Duis vel dapibus nisl, id hendrerit nisi. Nulla mauris risus, pretium vitae sapien
      et, consectetur feugiat nibh.`,
      src: 'https://chrommerce-shop.web.app/',
      img: noImageYet,
      alt: 'Personal E-commerce shop',
      hot: true,
    },
    {
      id: 3,
      title: 'Simon Said',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus nunc, faucibus ut purus eu,
      porttitor euismod mi. Pellentesque aliquet est sapien, sed efficitur velit rutrum vitae. Nulla
      facilisi. Cras sem ipsum, fermentum laoreet dignissim ac, rutrum a ipsum. In sed convallis leo.
      Praesent egestas ultrices nibh, vitae molestie massa. Nulla volutpat vehicula nisi, faucibus tincidunt
      nulla suscipit eu. Duis vel dapibus nisl, id hendrerit nisi. Nulla mauris risus, pretium vitae sapien
      et, consectetur feugiat nibh.`,
      src: 'https://github.com/Tonnraus/Light-Dark-Mode',
      img: project2,
      alt: 'Simon said game',
      hot: false,
    },
    {
      id: 4,
      title: 'Rick and Morty',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus nunc, faucibus ut purus eu,
      porttitor euismod mi. Pellentesque aliquet est sapien, sed efficitur velit rutrum vitae. Nulla
      facilisi. Cras sem ipsum, fermentum laoreet dignissim ac, rutrum a ipsum. In sed convallis leo.
      Praesent egestas ultrices nibh, vitae molestie massa. Nulla volutpat vehicula nisi, faucibus tincidunt
      nulla suscipit eu. Duis vel dapibus nisl, id hendrerit nisi. Nulla mauris risus, pretium vitae sapien
      et, consectetur feugiat nibh.`,
      src: 'https://github.com/Tonnraus/Light-Dark-Mode',
      img: project3,
      alt: 'Rick and Morty webpage',
      hot: false,
    },
  ],
};

export default initialState;
