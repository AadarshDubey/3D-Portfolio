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
  cpp,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  vichar,
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
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "API Integration",
    icon: mobile,
  },
  {
    title: "Responsive Design",
    icon: backend,
  },
  {
    title: "UI/UX Design",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C++",
    icon: cpp,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AWS Cloud Practitioner",
    icon: starbucks,
    iconBg: "#FFFFFF",
    date: "January 21, 2024",
    points: [
      "Gained foundational knowledge in AWS cloud services, including core services like EC2, S3, and RDS.",
      "Learned how to navigate the AWS Management Console and utilize key AWS services for cloud solutions.",
    ],
  },
  {
    title: "Google Cloud Digital Leader",
    icon: shopify,
    iconBg: "#666666 ",
    date: "January 10, 2024",
    points: [
      "Acquired essential understanding of Google Cloud services, covering topics like cloud infrastructure and data storage solutions.",
      "Built introductory skills in utilizing Google Cloud technologies to enhance business operations and productivity.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "CODSOFT",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "July 2024 -August 2024",
    points: [
      "Developed a Job Portal prototype using React, Node, and MongoDB, featuring job listings and user registration with REST APIs, successfully demonstrating over 50 listings and registrations locally.",
      "Created a blogging platform with HTML, CSS, and JavaScript, utilizing responsive UI components and REST APIs, which improved page load speed by 30%.",
      "Implemented CRUD operations with MongoDB, Express.js, and Node.js, optimizing queries through data caching and reducing query time by 25%.",
    ],
  },

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
    name: "WorkHive",
    description:
      "Developed a full-stack job portal, WorkHive, using MongoDB, Express, React, and Node.js, supporting both Employee and Job Seeker roles. Designed a scalable data storage solution with MongoDB and built a responsive, user-friendly interface with React, ensuring smooth performance and efficient user experience.",
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
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: vichar,
    source_code_link: "https://github.com/AadarshDubey/CODSOFT2",
  },
  {
    name: "LiveDocs",
    description:
      "Developed a real-time collaborative editor using Next.js, TypeScript, and Liveblocks, allowing multiple users to edit documents simultaneously with instant synchronization. Integrated secure authentication using Clerk API for seamless login and fine-grained access control, ensuring a secure and smooth collaboration experience.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AadarshDubey/LiveDocs",
  },
  {
    name: "Saas Landing Page",
    description:
      "Developed a responsive SaaS landing page using React.js and Tailwind CSS, incorporating interactive features like collapsible FAQs and animated pricing sections. Focused on creating an engaging user experience with 3D design elements and feedback-driven UI/UX enhancements.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AadarshDubey/Xora",
  },
];

export { services, technologies, experiences, testimonials, projects };