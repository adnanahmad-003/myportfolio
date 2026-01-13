import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

type ExperienceItem = {
  title: string;
  location: string;
  description: string;
  icon: JSX.Element;
  date: string;
  link?: string;
};

export const experiencesData = [
  {
    title: "Nourisho App : Core Mobile Application Developer",
    location: "Bangalore, India",
    description:
      "Built the Nourisho mobile app from scratch as part of the core team, delivering a stable and scalable product with 30k+ active users and near-zero crashes over 5 months. Implemented secure authentication and guest user flows with optimized session handling to improve onboarding speed and reliability. Developed a backend-driven, modular Home screen and bottom navigation architecture enabling rapid feature rollouts and reduced future development overhead. Integrated analytics platforms including Google Analytics, Meta, and NetCore with detailed event tracking to drive data-informed product decisions. Engineered a robust order tracking and location setup system using Google Maps, covering edge cases such as permission handling, background/foreground transitions, and map-based address selection for a seamless delivery experience.",
    icon: React.createElement(FaReact),
    link: "https://play.google.com/store/apps/details?id=com.nourisho&pcampaignid=web_share",
    date: "December 2024 – Present",
  },
  {
    title: "Cookr Food App (1 Lakh+ MAU) : Software Engineer Mobile",
    location: "Bangalore, India",
    description:
      "Transformed the legacy Cookr mobile app by upgrading React Native from version 0.71 to 0.77 with the New Architecture, involving extensive native-side refactoring, compatibility fixes, and performance tuning. Achieved a 20% improvement in rendering time and reduced app crashes by 73% as measured through Google Analytics and Firebase Crashlytics. Played a key role in developing the new Storefront section within two months, increasing user engagement and enabling new revenue-focused workflows. Implemented advanced caching mechanisms to reduce load times and enhance perceived responsiveness. Built the complete order flow from cart addition to payment success and failure handling, ensuring a reliable transaction experience.",
    icon: React.createElement(FaReact),
    link: "https://play.google.com/store/apps/details?id=com.cookr.customer&pcampaignid=web_share",
    date: "December 2024 – Present",
  },
  {
    title: "Zero Moblt : Freelancing MVP Developer",
    location: "Remote",
    description:
      "Led the development of Android and iOS applications from scratch as a freelance MVP developer, coordinating a small team to deliver a fully functional product within a tight timeline. Integrated AWS Cognito for secure authentication and implemented real-time trip tracking using Google Maps SDK, enabling parents to monitor their child’s trip live from the application.",
    icon: React.createElement(FaReact),
    date: "March 2025 – May 2025",
  },
  {
    title: "IdeaToReality : App Developer",
    location: "Delhi, India",
    description:
      "During my internship at IdeaToReality , I worked on the project ”Qalb,” utilizing the MVC structure to ensure that the app’s architecture matched the design requirements provided by the Qalb team. This experience allowed me to enhance my skills in writing clean and optimized code.",
    icon: React.createElement(FaReact),
    date: "Dec 2023 – March 2024",
  },
  {
    title: "Curomates : Software Development Intern",
    location: "Mumbai , India",
    description:
      "Client App Development :Designed and implemented the user authentication system, including the signup and signin features.Developed a comprehensive badges reward system to enhance user engagement , Push notifications , Dynamic add banners.Backend Contributions :Contributed to the development and optimization of backend server code, improving overall application performance and scalability. Worked on various features and bug fixes, ensuring robust and reliable backend operations.Curomates for Professionals :Assisted in the development of the ’Curomates for Professionals’ app, contributing to both frontend and backend components.",
    icon: React.createElement(FaReact),
    date: "March 2024 – July 2024",
  },
  {
    title: "Fitslist : App Developer (under agency)",
    location: "Netherlands (Remote)",
    description:
      "Utilized the MVC architecture in React Native to manage business-side logic, including the implementation of a scanner/camera module for QR code scanning to drive workflow processes.Instagram OAuth 2.0,Deep linking redirect back to app.Established a socket connection for support chat, enhancing real-time communication within the app.Contributed to the development of the company’s admin portal using Mantine UI, ensuring design alignment with company standards, configuring the REST API, and working on Next.js.",
    icon: React.createElement(FaReact),
    date: "July 2024 – Present",
  },
] satisfies readonly ExperienceItem[];

export const projectsData = [
  {
    title: "Law4Everyone",
    description:
      "An application that helps individuals solve their legal problems and provides a platform to easily hire lawyers.",
    tags: ["React-Native", "MERN", "JWT AUTH", "Eas", "Other native libraries"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Zomato Clone",
    description:
      "This is a Zomato clone application built using React Native and Expo.",
    tags: [
      "React Native",
      "Expo",
      "React Navigation",
      "react-native-maps",
      "expo-av",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "DAILY ACTIVITY TRACKER",
    description:
      "Daily Tracker: Keep track of uncompleted tasks for each day. Retrieve a list of all todos or a specific todo by ID. Monthly Profile Graph: Visualize monthly activity with a profile graph.",
    tags: ["React Native", "Victory Native", "MongoDB"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "C/C++",
  "JavaScript",
  "Python",
  "TypeScript",
  "Golang",
  "React Native",
  "Expo",
  "eas",
  "React.js",
  "Git/GitHub",
  "Node",
  "Firebase Functions/Firestore",
  "MongoDB",
  "CSS",
  "SQL",
  "REST API",
  "GraphQL",
  "CI/CD (Jenkins)",
  "UAT Testing",
  "MVC Architecture",
  "WebSocket",
  "DSA (400+ questions)",
] as const;
