import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  meta,
  komikult,
  todo,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  farmsetu,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  // {
  //   name: 'JavaScript',
  //   icon: javascript,
  // },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
 
];

const experiences = [
  {
    title: 'Backend Developer',
    company_name: 'FarmSetu',
    icon: farmsetu,
    iconBg: '#333333',
    date: 'April 2024 - July 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Todo App',
    description: 'Manage tasks, set priorities and deadlines, track progress, and stay organized across devices',
    tags: [
      {
        name: 'django-Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: todo,
    repo: 'https://github.com/sachi-sisodia/django_to-do-app',
    // demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  // {
  //   id: 'project-2',
  //   name: 'Leaderboard',
  //   description:
  //     'A leaderboard list app that displays scores submitted by different players.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'restapi',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'scss',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: leaderboard,
  //   repo: 'https://github.com/shaqdeff/Leaderboard',
  //   demo: 'https://shaqdeff.github.io/Leaderboard/',
  // },
  // {
  //   id: 'project-3',
  //   name: 'Math Magicians',
  //   description: 'This is a single-page calculator app built with React',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: math,
  //   repo: 'https://github.com/shaqdeff/Math-Magicians',
  //   demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  // },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
