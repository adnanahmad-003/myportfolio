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

export const experiencesData = [
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
] as const;

export const projectsData = [
  {
    title: "Law4Everyone",
    description:
      "An application that helps individuals solve their legal problems and provides a platform to easily hire lawyers.",
    tags: ["React-Native", "MERN", "JWT AUTH","Eas","Other native libraries"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Zomato Clone",
    description:
      "This is a Zomato clone application built using React Native and Expo.",
    tags: ["React Native", "Expo", "React Navigation", "react-native-maps", "expo-av"],
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
  "DSA (350+ questions)"
] as const;

