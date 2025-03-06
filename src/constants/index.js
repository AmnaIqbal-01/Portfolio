import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    git,
    figma,
    docker,
   
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
    // {
    //   id: "contact",
    //   title: "Contact",
    // },
    {
      id: "contact",
      title: "Contact",
      link: "mailto:amnaiqbal.01c@gmail.com",  // Adding a mailto link for direct email
    },
  ];
  
  const services = [
    {
      title: "PhP Laravel",
      icon: web,
    },
    {
      title: "React Js",
      icon: mobile,
    },
    {
      title: "SwiftUI",
      icon: backend,
    },
    {
      title: "Android Kotlin",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
   
    {
      name: "PHP",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      title: "PhP Laravel Developer",
      company_name: "TBOX",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Feb 2024 - Present",
      points: [
        "Developing and maintaining backend systems using Laravel PHP framework for various projects like RealHorse, 42Appen, and Handshake.",
        "Implementing authentication systems, including email verification and password reset functionalities.",
        "Integrating third-party services such as payment gateways, external APIs, and other integrations.",
        "Building and optimizing cron jobs for automating recurring tasks and processes.",
        "Collaborating with cross-functional teams to deliver scalable and secure backend solutions.",
        "Ensuring API performance and handling complex data workflows within the application."

      ],
    },
    {
      title: "Android Kotlin Developer",
      company_name: "Chirp Tech",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Nov 2023",
      points: [
        "Developing and maintaining Android applications using Kotlin and related technologies.",
        "Collaborating with cross-functional teams, including designers, product managers, and other developers to deliver feature-rich Android apps.",
        "Implementing third-party integrations, including Google APIs, Firebase, and other services.",
        "Mapping and developing UI screens to ensure a seamless user experience across the application.",
        "Participating in code reviews and providing constructive feedback to improve the overall quality of the Android application."

      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "ITU",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jun 2023 - Dec 2023",
      points: [
        "Assisted students in understanding core concepts of Database Management Systems (DBMS).",
        "Provided guidance on SQL queries, normalization, and database design principles.",
        "Helped students troubleshoot issues related to database schemas, relationships, and performance optimization.",
        "Conducted tutorials and review sessions to reinforce lecture topics and prepare students for exams.",
        "Assisted in grading assignments and providing feedback on database projects."
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };