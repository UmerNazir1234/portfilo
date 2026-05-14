import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaSchool,
  FaChartBar,
} from "react-icons/fa";

import profileImg from "../assets/profile.jpeg";
import projectImg1 from "../assets/project1.avif";
import projectImg2 from "../assets/project2.avif";
import projectImg3 from "../assets/project3.avif";
import projectImg4 from "../assets/project4.avif";
import projectImg5 from "../assets/project5.avif";
import projectImg6 from "../assets/images.jfif";
import projectImg7 from "../assets/projectImg7.avif";
export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "Next.js", "Tailwind CSS", "CSS", "JavaScript"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "DB Compass"],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    description: "Deploying and managing applications in cloud environments.",
    tags: ["Vercel", "AWS"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub"],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern and scalable eCommerce platform designed to deliver a seamless shopping experience for customers and powerful management tools for administrators. The frontend features secure user authentication, smart product search, advanced filtering, price-based sorting, bestseller and featured product sections, responsive product pages, shopping cart management, and an intuitive user interface optimized for all devices. The admin dashboard provides complete control over store operations, including product management, inventory tracking, category handling, order monitoring, customer management, and detailed order insights.",
    image: projectImg1,
    tech: ["React", "Node.js", "Expressjs", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://ecommerace-frontend.vercel.app/",
    code: "https://github.com/UmerNazir1234/EcommeraceV_3",
  },

  {
    title: "Portfolio Website",
    description:
      "A modern and fully responsive portfolio website designed to showcase projects, technical skills, experience, and achievements with smooth animations, clean UI design, dark/light mode support, and optimized performance across all devices.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application built with React for the frontend, Node.js and Express.js for the backend, MongoDB for database management, and Socket.IO for instant messaging functionality. The application allows users to create accounts, log in securely, update their profiles, send real-time messages, create conversations, share images, and enjoy a smooth and responsive chatting experience across devices.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://chat-app-v1-pink.vercel.app/",
    code: "https://github.com/UmerNazir1234/chat_APP",
  },
  {
    title: "AI Resume Generator",
    description:
      "An AI-powered resume builder developed with React for the frontend and integrated with OpenAI API and Cloudinary services. The application allows users to create accounts, log in securely, generate professional resumes using AI-powered prompts, edit or delete resumes, manage personal information, and enhance resume content intelligently with OpenAI integration. Cloudinary is used for efficient file and image management, while the responsive UI provides a smooth user experience across all devices.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://resume-bulder-psmc.vercel.app/",
    code: "https://github.com/UmerNazir1234/Resume_bulder",
  },
  {
  title: "School Dashboard",
  description:
    "A modern school management dashboard frontend built with Next.js and Tailwind CSS, designed to provide an interactive and responsive user experience for educational institutions. The dashboard includes student management, teacher profiles, attendance tracking, class schedules, exam results, fee management, announcements, analytics charts, and a clean admin interface optimized for desktop and mobile devices.",
  image: projectImg7,
  tech: ["Next.js", "Tailwind CSS", "TypeScript", "Chart.js"],
  icons: [FaReact, FaSchool, FaChartBar],
  demo: "https://school-ms-phi.vercel.app/",
  code: "#",
},
];

export const workData = [
  {
    role: "Frontend Developer",
    company: "RF Rechnologies.",
    duration: "2025",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks,",
    color: "purple",
  },
  {
    role: "Mern Stack Developer",
    company: "RF Rechnologies.",
    duration: "2025 - 2026",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink",
  },

];
