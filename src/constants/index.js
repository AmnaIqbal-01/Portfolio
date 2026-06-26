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
    mobilityPlatform,
    motionTrace,
    financeApp,
    ecommerceApp,
    movieExplorer,
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
    {
      id: "projects",
      title: "Projects",
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
    {
      id: "linkedin",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/amnaiqbal01/",
    },
    {
      id: "medium",
      title: "Medium",
      link: "https://medium.com/@amnaiqbal.01c", 
    }
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
      title: "IOS DEVELOPER",
      company_name: "TBOX",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Feb 2025 - Present",
      points: [
        "Developed and maintained iOS applications using Swift/SwiftUI, implementing features such as Google Maps integration, ad services, third-party SDKs, and whitelabel customizations to support multiple clients.",
        "Managed App Store releases end-to-end by generating builds, configuring signing/provisioning profiles, and submitting updates, ensuring smooth deployment pipelines.",
        "Enhanced app quality through localization, debugging, and testing, improving user experience across multiple regions and devices while monitoring performance issues using Sentry.",
        "Collaborated with design and QA teams to deliver polished UIs, optimize workflows, and ensure consistent performance across modules."

      ],
    },
    {
      title: "PhP Laravel Developer",
      company_name: "TBOX",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Feb 2024 - Feb 2025",
      points: [
        "Developing and maintaining backend systems using Laravel PHP framework for various projects.",
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
      name: "Smart Mobility Platform",
      description:
        "Large-scale white-label iOS platform for connected mobility services. Users discover service locations on interactive maps, manage real-time sessions, process payments via Stripe, track usage history, and receive live status updates. Multiple branded App Store apps share one codebase with custom themes, client configs, and feature toggles.",
      tags: [
        { name: "swift", color: "blue-text-gradient" },
        { name: "uikit", color: "green-text-gradient" },
        { name: "corelocation", color: "pink-text-gradient" },
        { name: "stripe", color: "blue-text-gradient" },
        { name: "apns", color: "green-text-gradient" },
         { name: "googleMaps", color: "pink-text-gradient" },
      ],
      image: mobilityPlatform,
      category: "Client Project",
    },
    {
      name: "MotionTrace",
      description:
        "Native iOS app for video-based movement analysis. Users record or import footage, review interactive charts and metrics with baseline comparisons, and export professional PDF reports with offline sync across devices. Contributed to video capture pipeline, SwiftUI analytics dashboards, Core Data sync, subscriptions, shared access, and in-app messaging.",
      tags: [
        { name: "swift", color: "blue-text-gradient" },
        { name: "swiftui", color: "green-text-gradient" },
        { name: "coredata", color: "pink-text-gradient" },
        { name: "avfoundation", color: "blue-text-gradient" },
        { name: "firebase", color: "green-text-gradient" },
      ],
      image: motionTrace,
      category: "Client Project",
    },
    {
      name: "Personal Finance App",
      description:
        "SwiftUI-based finance app for tracking income, expenses, and financial planning with interactive dashboards. Built offline-first with Core Data, cash flow forecasting, budget alerts, local notifications, subscription premium tiers, and ad-supported monetization using MVVM and Combine.",
      tags: [
        { name: "swiftui", color: "blue-text-gradient" },
        { name: "coredata", color: "green-text-gradient" },
        { name: "combine", color: "pink-text-gradient" },
        { name: "storekit", color: "blue-text-gradient" },
        { name: "charts", color: "green-text-gradient" },
      ],
      image: financeApp,
      category: "Client Project",
    },
    {
      name: "E-Commerce Mobile App",
      description:
        "Native iOS e-commerce application for browsing products, managing carts, and completing secure checkout with a regional banking payment gateway. Integrated Yandex Maps for store discovery, delivery address selection, route visualization, and real-time order tracking with push notifications.",
      tags: [
        { name: "swift", color: "blue-text-gradient" },
        { name: "yandexmaps", color: "green-text-gradient" },
        { name: "restapi", color: "pink-text-gradient" },
        { name: "payments", color: "blue-text-gradient" },
        { name: "mvvm", color: "green-text-gradient" },
      ],
      image: ecommerceApp,
      category: "Client Project",
    },
    {
      name: "Movie Explorer",
      description:
        "Production-quality SwiftUI iOS app for exploring trending movies and searching TMDB's catalogue. Features refreshable trending cards, debounced live search with shimmer skeletons, parallax movie detail views, UserDefaults-backed favourites with swipe-to-delete, retry error states, and full dark/light mode. Built with MVVM, async/await networking, and type-safe NavigationStack routing.",
      tags: [
        { name: "swiftui", color: "blue-text-gradient" },
        { name: "mvvm", color: "green-text-gradient" },
        { name: "tmdb", color: "pink-text-gradient" },
        { name: "asyncawait", color: "blue-text-gradient" },
        { name: "swift", color: "green-text-gradient" },
      ],
      image: movieExplorer,
      category: "Personal Project",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };