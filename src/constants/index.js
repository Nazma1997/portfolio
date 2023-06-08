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
  
} from "../assets";
import next from '../assets/tech/next.png';
import invoice from '../assets/invoice.png';
import prime from '../assets/prime.png'


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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: " Web Designer",
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
    name: "Next",
    icon: next,
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
    name: "Three JS",
    icon: typescript,
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
    title: "MERN Developer",
    company_name: "Bitpixel Software Solution",
    icon: starbucks,
    iconBg: "#383E56",
    date: " December, 2022 -February,2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer(Backend-Developer)",
    company_name: "Digital Marketing & Consultancy  Services, Mirpur,Dhaka",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October, 2022 - December,2022",
    points: [
      "Developing and maintaining web applications using Express.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Blog Website",
    description:
      "A blogging website is an online platform where individuals share their written content through blog posts, engaging readers and building a community around various topics of interest. It includes features like user registration, post creation, commenting, social sharing, and search functionality and pagination.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "red-text-gradient",
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
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Nazma1997/blog-site",
    live_site_link : "https://bloging-site.netlify.app/",
    server_site_link : "https://github.com/Nazma1997/blog-server"
  },

 
  {
    name: "Ecommerce Website",
    description:
      "The ecommerce website is a virtual marketplace where users can buy and sell products online. It offers a wide range of products, secure payment options, and convenient shopping features, providing a seamless shopping experience for customers worldwide.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "red-text-gradient",
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
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Nazma1997/best-price",
    live_site_link : "https://bestprice.co.ke/",
    server_site_link : "https://github.com/Nazma1997/best-price"
  },
 
  
  {
    name: "Corporate Website",
    description:
      "The corporate website serves as the digital presence for a company, showcasing its brand, products, and services. It provides comprehensive information about the company's history, mission, and values. With a professional and user-friendly design, the corporate website aims to establish credibility and foster engagement with its target audience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "red-text-gradient",
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
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: prime,
    source_code_link: "https://corporate-website-main.vercel.app/",
    live_site_link : "https://corporate-website-main.vercel.app/",
    server_site_link : "https://github.com/Nazma1997/ServerSide"
  },

  
   {
    name: "Corporate Website",
    description:
      "The corporate website serves as the digital presence for a company, showcasing its brand, products, and services. It provides comprehensive information about the company's history, mission, and values. With a professional and user-friendly design, the corporate website aims to establish credibility and foster engagement with its target audience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "red-text-gradient",
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
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: prime,
    source_code_link: "https://github.com/Nazma1997/mhSolutions.com",
    live_site_link : "https://mhsolutions.netlify.app/",
    server_site_link : "https://github.com/Nazma1997/mh-backend"
  },

 
  {
    name: "Real State Website",
    description:
      "The real estate website is a platform that connects buyers, sellers, and renters in the property market. It offers a comprehensive listing of properties for sale or rent, along with detailed information, high-quality images, and search filters to help users find their desired property. With user-friendly navigation and contact options, the website facilitates smooth transactions and promotes informed decision-making in the real estate industry.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "red-text-gradient",
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
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: prime,
    source_code_link: "https://github.com/Nazma1997/real-state-frontend-site",
    live_site_link : "https://real-state-frontend-site.vercel.app/",
    server_site_link : "https://github.com/Nazma1997/real-state-backend-site"
  },
  
  {
    name: "Invoice generator",
    description:
      "An invoice generator is a tool or software that automates the process of creating professional invoices for businesses. It simplifies the task of generating invoices by providing pre-designed templates, allowing users to input relevant details such as client information, products or services provided, quantities, prices, and calculates totals automatically, saving time and ensuring accuracy.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: invoice,
    source_code_link: "https://github.com/Nazma1997/invoice-generator",
    server_site_link: "https://github.com/Nazma1997/invoice-generator",
    live_site_link : "https://leafy-pavlova-514a93.netlify.app/",
    
  },
  
 
  {
    name: "PSD to HTML",
    description:
      "PSD to HTML design is a process of converting a Photoshop design file (PSD) into a functional HTML code. It involves slicing and coding the design elements, such as layout, graphics, and typography, into HTML and CSS to create a fully responsive and interactive web page. .",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "red-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
     
    ],
    image: prime,
    source_code_link: "https://github.com/Nazma1997/profo-bootstrap",
    live_site_link : "https://admiring-hodgkin-b40fcd.netlify.app/",
    server_site_link : "https://github.com/Nazma1997/profo-bootstrap"
  },
  
  
  
];

export { services, technologies, experiences, testimonials, projects };
