import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  gearbox,
  logo2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IoT Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Gearbox",
    icon: gearbox,
    iconBg: "#383E56",
    date: "September 2020 - April 2021",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Led a cross-departmental team on a product development project, ensuring deadlines were met and facilitating clear communication.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Angaza Elimu",
    icon: logo2,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Designed and developed innovative IoT training boards, combining hardware expertise with custom code to facilitate hands-on learning and deep understanding of IoT applications",
      "Seamlessly navigated dual roles within the IoT department and marketing team, contributing to technical development and impactful marketing initiatives.",
      "Collaborated with educators, designers, and technology experts to integrate EdTech solutions across various learning platforms, ensuring optimal user experience.",

    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "It was a good machine learning product for the deaf",
    name: "Brenda Muchiri",
    designation: "Mechanical Engineer",
    company: "Gearbox",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kori does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kori's team optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Smart Parking",
    description:
      "Web-based platform that allows users to book and reserve parking spaces in malls",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Hardware",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Kori254/parking.git",
  },
  {
    name: "Class Attendance Using Facial Recognition",
    description:
      "Python project that uses Camera's to record class attendance. It uses a machine learning model that is trained on the images of the students.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Kori254/class-attendance.git",
  },
  {
    name: "AI Summarizer",
    description:
      "An AI web App that can be able to summarize Text. It uses ChatGpT API",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Talwind",
        color: "green-text-gradient",
      },
      {
        name: "Chatgpt",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Kori254/AI-Summarizer.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
