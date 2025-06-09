import Connect4Image from '../assets/ProjectImages/Classic-Connect4-Mobile2.png';
import WOD4UImage from '../assets/ProjectImages/WOD4U-Mobile.png';
import DutchImage from '../assets/ProjectImages/Dutch-Mobile.png';
import CohortyImage from '../assets/ProjectImages/Cohorty-Desktop.png';

import TAJbefore from '../assets/ProjectImages/TAJbefore.png';
import TAJafter from '../assets/ProjectImages/TAJafter.png';
import TAJafter2 from '../assets/ProjectImages/TAJafter2.png';
import TAJafter3 from '../assets/ProjectImages/TAJafter3.png';
import TAJafter4 from '../assets/ProjectImages/TAJafter4.png';
import TAJafter5 from '../assets/ProjectImages/TAJafter5.png';

import MBTRTlanding from '../assets/ProjectImages/MBTRTlanding.png';
import MBTRTmockdash from '../assets/ProjectImages/MBTRTmockdash.png';
import MBTRTclientfeedbacks from '../assets/ProjectImages/MBTRTclientfeedbacks.png';

export const clientProjectsData = [
  {
    id: 1,
    title: "Trainwithamandajane",
    description: "'Trainwithamandajane' is a personal training website originally built with WordPress. The initial version was limited in customization and visual appeal, relying heavily on static templates and plugins. For the updated version, I collaborated with the client to rebuild the entire site from scratch using React and Materialize. The new site is fully responsive, visually cleaner, faster-loading, and designed to better reflect her brand. It includes smooth animations, improved mobile usability, and a more modern, engaging user experience that sets it apart from the original.",
    beforeImageUrl: TAJbefore,
    afterImages: [TAJafter, TAJafter2, TAJafter3, TAJafter4, TAJafter5],
    url: "https://trainwithamandajane.com/",
    deployedUrl: "https://trainwithamandajane.com/",
    githubUrl: "https://github.com/Barefootjiggy/TAJ-F",
  },
  {
    id: 6,
    title: "MBTRT",
    description: "MBT Response Tool is a web app for coaches on MyBodyTutor platform streamline their client feedback process. The app scrapes submitted client logs using Selenium, parses them into labeled sections (e.g., meals, workouts, mindset, and goals), and uses the OpenAI API to generate personalized, empathetic responses for each section. Coaches can selectively regenerate AI responses, toggle between models (GPT-3.5 and GPT-4), and view client feedback in a clean, organized layout. The app includes a demo mode with mock client data to showcase its core features without needing a real login.",
    beforeImageUrl: MBTRTlanding,
    afterImages: [MBTRTmockdash, MBTRTclientfeedbacks],
    url: "https://mbtrt-c6f69d488d00.herokuapp.com",
    deployedUrl: "https://mbtrt-c6f69d488d00.herokuapp.com",
    githubUrl: "https://github.com/Barefootjiggy/MBTRT",
  }
];

export const projectsData = [
  {
    id: 2,
    title: "Cohorty",
    description: "Cohorty is a modern app for tracking courses and assignments for General Assembly. This app streamlines administrative tasks, enhances staff and administrator visibility, and provides a centralized platform for managing academic data. Email Address: emre Password: doer6flatbed!RUMOR",
    url: "https://cohorty.webdevstuff.ninja/",
    githubUrl: "https://github.com/Barefootjiggy/cohorty-frontend/tree/dev",
    imageUrl: CohortyImage,
  },
  {
    id: 3,
    title: "Dutch",
    description: "Dutch is an app designed to simplify the management of shared expenses across diverse scenarios. Each of these we call a 'Divvy'. Whether organizing social events, managing household expenses, or coordinating group activities that involve shared costs, Dutch helps ensure that financial contributions are recorded, tracked, and balanced fairly and efficiently. Here's a demo login, Email: aris@demo.dutch Password: Demo!23.",
    url: "https://dutch.webdevstuff.ninja/",
    githubUrl: "https://github.com/Barefootjiggy/Dutch-Frontend",
    imageUrl: DutchImage,
  },
  {
    id: 4,
    title: "WOD4U",
    description: "WOD4U is an app where users can get workouts of the day given to them as well as the ability to create, update, and delete their own workouts. Users also have the ability to comment on workouts and share their experience or encouragement to users that posted the workout. Workouts that are created by users will be added to the preset database of workouts that the app comes with.",
    url: "https://wod4u.netlify.app/",
    githubUrl: "https://github.com/Barefootjiggy/WOD4U-frontend",
    imageUrl: WOD4UImage,
  },
  {
    id: 5,
    title: "Connect 4",
    description: "Connect Four is a classic two-player connection game in which players choose a color and then take turns dropping colored discs into a grid. The objective is to be the first to form a horizontal, vertical, or diagonal line of four discs of your color.",
    url: "https://connect-4-hazel.vercel.app/",
    githubUrl: "https://github.com/Barefootjiggy/Connect-4",
    imageUrl: Connect4Image,
  },
];
