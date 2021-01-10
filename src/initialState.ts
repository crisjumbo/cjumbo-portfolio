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
    src: 'https://i.ibb.co/1ZhmVH5/icon.png',
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
    { id: 1, name: 'brand logo', src: 'https://i.ibb.co/1ZhmVH5/icon.png', delay: '0s' },
    { id: 2, name: 'instagram logo', src: 'https://i.ibb.co/f05DKzL/logo6twit.png', delay: '1s' },
    { id: 3, name: 'github logo', src: 'https://i.ibb.co/3sdcK17/logo6gith.png', delay: '1s' },
    { id: 4, name: 'linkedin logo', src: 'https://i.ibb.co/GHGwtp4/logo6link.png', delay: '1s' },
    { id: 5, name: 'facebook logo', src: 'https://i.ibb.co/6XHFnzY/logo6face.png', delay: '1s' },
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
      title: 'Social Media Dashboard',
      description: `Single page with both dark and light themes. One of my first projects so thats why they are
      made in Javascript, styles in css and of course html.
      The main goal is to build a simple webpage that can contain different themes.`,
      src: 'https://github.com/Tonnraus/Light-Dark-Mode',
      img: 'https://i.ibb.co/x8GLDys/dashboarddarklight.png',
      alt: 'Social Media Dashboard',
      hot: false,
    },
    {
      id: 2,
      title: 'Chrommerce shop',
      description: `Online shope where users can select different items, send them to a checkout list and finally 
      purchase with Paypal. As a final detail a map will show with the geolocation the package will arrive.
      The project is made by react, styles-components(css in line), Strapi as Api Rest. Also the website counts on
      a PWA display for mobile users. `,
      src: 'https://chrommerce-shop.web.app/',
      img: 'https://i.ibb.co/cDMhmzk/No-Image-Yet.png',
      alt: 'Personal E-commerce shop',
      hot: true,
    },
    {
      id: 3,
      title: 'Simon Said',
      description: `Famous Game but brought into the website, it has some addons like level, max-level and current level.
      The main project is made in Platzi course but I added some feature, everything made in Javascript orientated to objects.`,
      src: 'https://github.com/Tonnraus/Light-Dark-Mode',
      img: 'https://i.ibb.co/82pb0yG/Simon-Says.png',
      alt: 'Simon said game',
      hot: false,
    },
    {
      id: 4,
      title: 'Rick and Morty',
      description: `The famous serie website. It works together a free API, the main purpose was to practice
      API requests and its structure. Respect technologies it is made in pure Javascript with the power of sass.`,
      src: 'https://github.com/Tonnraus/Light-Dark-Mode',
      img: 'https://i.ibb.co/4gNpb4Y/Rickand-Morty-Web.jpg',
      alt: 'Rick and Morty webpage',
      hot: false,
    },
    {
      id: 5,
      title: 'Platzi Video v01',
      description: `Project build in the Platzi platform course, the main goal is to use css or sass to create a layout
      where our "Platzi videos " platform will be host.`,
      src: 'https://tonnraus.github.io/Platzi-Videos/',
      img: 'https://i.ibb.co/VMhpYYb/Platzi-Videos01.png',
      alt: 'Platzi Video version one',
      hot: false,
    },
    {
      id: 6,
      title: 'Platzi Video v02',
      description: `Project built in Platzi platform course, the main goal is to call API and print the response filtering by 
      categories of movies, after the client can choose a movie or look for a specific one in the input.`,
      src: 'https://tonnraus.github.io/PlatziVideo-02/',
      img: 'https://i.ibb.co/BCHfFSn/Platzi-Video02.png',
      alt: 'Platzi Video version two',
      hot: false,
    },
    {
      id: 7,
      title: 'Platzi Video v02',
      description: `Updated version of last platform video, now we are employing React, sass styles, Redux, Routes and complex
      functional components with custom hooks. The main goal is to offer a list of videos which can be added or removed from a personal
      list. Also, there is a login/register page (if you log in it will display your gravatar picture)`,
      src: 'https://platzi-video-03.web.app/',
      img: 'https://i.ibb.co/p0yD1Yf/Platzi-Video-03.png',
      alt: 'Platzi Video version two',
      hot: false,
    },
    {
      id: 8,
      title: 'Memories Project',
      description: `Website to save memories, It also accepts likes, edition or delete actions. In this project I used MongoBD Atlas as
      data base, Express as server and finally React with Typescript as the frontend together with Material UI. Final product is deployed 
      with Heroku and Netlify.`,
      src: 'https://memorias.netlify.app/',
      img: 'https://i.ibb.co/3cQVxYs/Memories-project.png',
      alt: 'Memories project',
      hot: true,
    },
  ],
};

export default initialState;
