import type { Step } from "./typings";

const steps: Step[] = [
  {
    role: "Lead Frontend Developer",
    company: "TeamITG",
    start: "Sep 22",
    end: "Now",
    tasks: [
      "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
      "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
      "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
    ],
    paragraphs: [
      "TeamITG is a consulting British company from Birmingham with over 1600 employees and more than 10 offices in Europe, USA, and Asia. It's strongly positioned in the automotive sector and very well structured. I provide mentoring for Junior, Mid, and Senior level Frontend developers and I also act as line manager for them.",
      "I work within projects for Land Rover and Jaguar companies (they are part of the same business group, the most important client for ITG). In particular, I am the technical point of reference regarding frontend development. I also have responsibility for technology-related decisions to improve the user experience and the developers' work experience while increasing productivity.",
      "I was recently involved in the design and development of the Adobe Experience Manager editor in order to improve the editing experience for authors and improve the creation of graphical interfaces.",
      "Currently I work in a team that is in charge of designing and implementing personalization and a/b tests. I'm also working on the rewrite of the primary navigation using react (that will also be used by third parties in a microfrontend context).",
    ],
  },
  {
    role: "Lead Frontend Developer",
    company: "Shopfully",
    start: "Nov 20",
    end: "Sep 22",
    tasks: [
      "Worked with a team to build a marketing website and e-commerce platform for blistabloc, an ambitious startup.",
      "Helped solidify a brand direction for blistabloc that spans both packaging and web.",
      "Interfaced with clients on a weekly basis, providing technological expertise.",
    ],
    paragraphs: [
      "Leader company in the retailers market, a platform used by almost 40 million users worldwide with 3 web and 3 mobile applications. Specifically, I worked in the team named \"PromoQui\" on the maintenance and development of two mobile applications that shared the same codebase. I had the chance to use React Native on a network of 40 millions users. My task, in particular, was to develop reusable components and tracking systems that do not impact ui performance. Furthermore, I also had to manage unit tests, a/b testing e2e testing.",
      "After about 10 months I was promoted to lead the development and growth of the team that deals with the mobile applications of the Shopfully network. Specifically, I led the development of the applications, android and ios, PromoQui and VolantinoFacile. After the architectural changes made immediately after the start of the activity, the apps had a decrease in bootstrap time of 0.5s. This improved user experience reaching grade 4.8 on the Play Store and App Store, an increase of 0.2 points in 2 months. The changes had also a positive impact on crash-free rate decreasing it from 99.63% to 99.88%.",
      "In the last months of my collaboration with Shopfully, I was involved in the process of defining the user experience customisation system. To this end, I designed and implemented an ecosystem of libraries that were able to render the specified interface for each user cluster on the basis of a defined json schema. To this end, I also contributed to the development of the editor that allows the json schema to be generated and referred to specific user clusters.",
    ],
  },
  {
    role: "Senior Software Developer / Frontend Architect",
    company: "Logispin",
    start: "Oct 17",
    end: "Nov 20",
    tasks: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects.",
      "Work with a variety of different languages, platforms, frameworks, and content management systems.",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.",
    ],
    paragraphs: [
      "I've worked for this international company with several offices in Europe and South America operating in the gaming and gambling sector. I had the opportunity to develop single-page applications for the sports betting team. In particular, my responsibility was focused on performance improvements. The target markets were low-tech and optimizing the performance of applications running on older devices was particularly important. ",
      "For the last part of my work in Logispin I've been promoted to the role of Frontend Architect working in the Platform Team. In this period I've designed an entire ecosystem of applications that has to be executed both on web, mobile or as a standalone Electron app. I have also designed the prototype of the microfrontend architecture that was completed when I moved over. I've also been in charge of developing a graphical interface that, through the interaction with WebSocket, was able to render in a 3D environment the main events that occurred during live matches.",
    ],
  },
  {
    role: "Web & Mobile Developer",
    company: "Pleaseup",
    start: "Mar 15",
    end: "Oct 17",
    tasks: [
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.",
      "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
    ],
    paragraphs: [
      "Design and development of mobile applications, websites, and Facebook applications implemented with WordPress, Codeigniter, Angular 1 and 2, React, React Native, and Ionic.",
      "Teacher in a course related to the UI Bootstrap framework. The course was particularly focused on CSS components, grids and layouts, UX/UI, user interaction, and javascript libraries."
    ],
  },
  {
    role: "Web & Mobile Developer",
    company: "Iaki",
    start: "July 14",
    end: "May 16",
    tasks: [
      "Implemented performance optimization strategies, resulting in a 20% improvement in page load times across the platform.",
      "Ensured cross-browser compatibility for the platform, enhancing the user experience for a diverse user base.",
      "Integrated interactive data analytics features into the platform.",
    ],
    paragraphs: [
      "Design and development of a social network called \"Il Libraio\" https://www.illibraio.it. I've initially worked on web version as a fullstack developer, but I've also worked on mobile app versions both for Android and iOS devices.",
      "It was the first project in which I had the chance and need to design something scalable by having to manage and optimize data concerning over 250,000 registered users, over 6,000,000 books, 25,000 authors, 10,000 posts, libraries, and events. I also had to handle data migration from an ancient and outdated structure.",
    ],
  },
  {
    role: "Lead Frontend Developer",
    company: "Freelance",
    start: "Jan 11",
    end: "Now",
    tasks: [
      "Implemented performance optimization strategies, resulting in a 20% improvement in page load times across the platform.",
      "Ensured cross-browser compatibility for the platform, enhancing the user experience for a diverse user base.",
      "Integrated interactive data analytics features into the platform.",
    ],
    paragraphs: [
      "As a freelancer I have taken part in many different projects as a frontend, backend, fullstack developer, but also, especially at the beginning of my career, taking care of SEO and communication. I have been involved in projects in many different areas using numerous technologies: CMS (Wordpress, Joomla, Drupal, AEM) frontend libraries and frameworks (React, Angular, Svelte etc), native and hybrid mobile technologies (Ionic and React Native)."
    ],
  },
];

export default steps;
