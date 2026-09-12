/// <reference types="vite-plugin-svgr/client" />

import Github from "../../public/assets/icons/github.svg?react";
import Twitter from "../../public/assets/icons/twitter.svg?react";
import Linkedin from "../../public/assets/icons/linkedin.svg?react";
import Mail from "../../public/assets/icons/mail.svg?react";
import LocationMarker from "../../public/assets/icons/location-marker.svg?react";
import Phone from "../../public/assets/icons/phone.svg?react";
import { BlogPost, Project } from "./types";

export const tools = [
  {
    name: "html",
    url: "/assets/tools/html.svg",
  },
  {
    name: "css3",
    url: "/assets/tools/css.svg",
  },
  {
    name: "javascript",
    url: "/assets/tools/javascript.svg",
  },
  {
    name: "sass",
    url: "/assets/tools/sass.svg",
  },
  {
    name: "react",
    url: "/assets/tools/react.svg",
  },
  {
    name: "bootstrap",
    url: "/assets/tools/bootstrap.svg",
  },
  {
    name: "jquery",
    url: "/assets/tools/jquery.svg",
  },
  {
    name: "nextjs",
    url: "/assets/tools/nextjs.svg",
  },
  {
    name: "vuejs",
    url: "/assets/tools/vuejs.svg",
  },
  {
    name: "angularjs",
    url: "/assets/tools/angularjs.svg",
  },
  {
    name: "react-native",
    url: "/assets/tools/react-native.svg",
  },
];
export const contactInfo = [
  {
    icon: Github,
    url: "https://github.com/iwa-temmy",
    label: "iwa-temmy",
    type: "github",
  },
  {
    icon: Twitter,
    url: "https://x.com/OlawaleCodes",
    label: "@olawalecodes",
    type: "twitter",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/olawale-iwaloye-26b80314b/",
    label: "Olawale Iwaloye",
    type: "linkedin",
  },
  {
    icon: Mail,
    url: "mailto:iwaloyeo@gmail.com",
    label: "iwaloyeo@gmail.com",
    type: "mail",
  },
  {
    icon: LocationMarker,
    url: "https://maps.app.goo.gl/TQL4TF9fgd4R9eDU9",
    label: "Lagos State, Nigeria",
    type: "location",
  },
  {
    icon: Phone,
    url: "tel:+2348134437871",
    label: "+2348134437871",
    type: "phone",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "SmartComply",
    image: "/assets/placeholder.png",
    description:
      "SmartComply is a solution that helps payment card industry organizations in attaining their compliance in a short duration of time.",
    tools: ["React JS", "Sass", "Material UI", "React Redux"],
    url: "https://app.smartcomply.com/auth/login",
    year: "2023",
  },
  {
    id: 2,
    title: "Wired Assurance Website",
    image: "/assets/placeholder.png",
    description:
      "The official website of the Wired Assurance, a software vulnerability testing service that helps to ensure security in applications.",
    tools: ["React JS", "Sass", "Framer Motion", "Vite"],
    url: "http://wiredassurance.com/",
    year: "2023",
  },
  {
    id: 3,
    title: "Smartcomply Website",
    image: "/assets/placeholder.png",
    description:
      "The official website of the Smartcomply, the first and number one compliance tech in Africa, aims to attend to compliance needs of financial institutions/card processing companies.",
    tools: ["React JS", "Tailwind CSS", "Framer Motion", "Vite"],
    url: "http://smartcomplyapp.com/",
    year: "2023",
  },
  {
    id: 4,
    title: "Oyo State Health Insurance Self Service Portal",
    image: "/assets/placeholder.png",
    description:
      "The official website of the Oyo State Health Insurance Application, aimed at managing health insurance services and providing information related to health insurance in Oyo State, Nigeria.",
    tools: ["Next JS", "Tailwind CSS", "RTK Query"],
    url: "https://self-service.oyshia.oy.gov.ng/login",
    year: "2024",
  },
  {
    id: 5,
    title: "Fuseerp Website",
    image: "/assets/placeholder.png",
    description:
      "The official website of the Fuse ERP software that gives potential clients insights about the features of the application.",
    tools: ["React JS", "Sass", "Animate CSS"],
    url: "http://fuseerp.com/",
    year: "2024",
  },
  {
    id: 6,
    title: "Radease",
    image: "/assets/placeholder.png",
    description:
      "Radease, a healthcare company based in Nigeria, is driven by a profound vision to bring about transformative changes within the industry.",
    tools: ["React JS", "Sass", "Vite", "Tailwind CSS", "Framer Motion"],
    url: "https://radease.com",
    year: "2024",
  },
];

export const blogs: BlogPost[] = [
  {
    id: 1,
    image: "/assets/placeholder.png",
    date: "Aug 24, 2023",
    title: "Building compliant fintech UIs at scale",
    description:
      "Notes on structuring React design systems for financial products where accessibility and compliance aren't optional.",
    url: "#",
  },
  {
    id: 2,
    image: "/assets/placeholder.png",
    date: "Oct 02, 2023",
    title: "Why I moved from Sass to Tailwind",
    description:
      "A practical look at the tradeoffs after shipping the same product with both approaches.",
    url: "#",
  },
  {
    id: 3,
    image: "/assets/placeholder.png",
    date: "Jan 14, 2024",
    title: "State management without the boilerplate",
    description:
      "Rethinking Redux-heavy codebases and what actually needs global state.",
    url: "#",
  },
  {
    id: 4,
    image: "/assets/placeholder.png",
    date: "Mar 30, 2024",
    title: "Shipping faster with Vite and Next.js together",
    description:
      "Lessons from maintaining both toolchains across different client projects.",
    url: "#",
  },
];
