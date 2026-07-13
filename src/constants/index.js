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
  git,
  figma,
  vglug,
  cloudlogic,
  socialconnect_preview,
  socialconnect_connect,
  socialconnect_discover,
  socialconnect_ledger,
  socialconnect_profile,
  socialconnect_sakhi,
  portfolio_ss,
  google_certifi,
  eduskill_certif,
  tata_certifi
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Open Source Contributor",
    icon: creator,
  },
];

// Categorized tech stack
const techCategories = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: reactjs,
        link: "https://react.dev/",
      },
      {
        name: "JavaScript",
        icon: javascript,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "HTML5",
        icon: html,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        icon: css,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
        link: "https://tailwindcss.com/",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        link: "https://www.python.org/",
      },
      {
        name: "Supabase",
        icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
        link: "https://supabase.com/",
      },
      {
        name: "REST APIs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        link: "#",
      },
    ],
  },
  {
    category: "Mobile",
    items: [
      {
        name: "React Native",
        icon: reactjs,
        link: "https://reactnative.dev/",
      },
      {
        name: "Expo",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        link: "https://expo.dev/",
      },
    ],
  },
  {
    category: "UI/UX",
    items: [
      {
        name: "Figma",
        icon: figma,
        link: "https://www.figma.com/",
      },
      {
        name: "Adobe Photoshop",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
        link: "https://www.adobe.com/products/photoshop.html",
      },
      {
        name: "Adobe Illustrator",
        icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
        link: "https://www.adobe.com/products/illustrator.html",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Git",
        icon: git,
        link: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        link: "https://github.com/parithi029",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        link: "https://code.visualstudio.com/",
      },
      {
        name: "Sentry",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg",
        link: "https://sentry.io/",
      },
    ],
  },
];

// Flat technologies array (backward compat)
const technologies = techCategories.flatMap((cat) => cat.items);

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "VGLUG Foundation",
    icon: vglug,
    iconBg: "#383E56",
    date: "2026",
    points: [
      "Collaborated in an open-source team to build a React Native application serving over 40 regional NGOs.",
      "Integrated Supabase authentication and backend services.",
      "Used Sentry to monitor runtime issues and improve application stability.",
      "Helped improve volunteer coordination workflows through automation.",
    ],
  },
  {
    title: "Full Stack Python Trainee",
    company_name: "VGLUG Foundation",
    icon: vglug,
    iconBg: "#E6DEDD",
    date: "2025 – 2026",
    points: [
      "Completed intensive training in Python, Backend Development, and Application Architecture.",
      "Gained hands-on experience with API Integration and Open Source Development.",
      "Built production-ready backend services using Python and RESTful API design patterns.",
      "Contributed to open-source repositories and followed best practices in collaborative development.",
    ],
  },
  {
    title: "Full Stack Web Development Intern",
    company_name: "Cloudlogic Technologies",
    icon: cloudlogic,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Developed responsive web applications using modern frontend technologies.",
      "Created reusable UI components following industry best practices.",
      "Ensured cross-browser compatibility and optimized application performance.",
      "Worked with modern frontend technologies to deliver seamless user experiences.",
    ],
  },
];

const projects = [
  {
    name: "SocialConnect Hub",
    description:
      "A mobile platform developed for NGO collaboration, enabling volunteer matching, communication, and outreach management for over 40 organizations.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Supabase", color: "green-text-gradient" },
      { name: "Sentry", color: "pink-text-gradient" },
    ],
    features: ["Authentication", "Volunteer Matching", "Realtime Data", "Responsive Mobile UI"],
    image: socialconnect_preview,
    images: [
      socialconnect_discover,
      socialconnect_ledger,
      socialconnect_connect,
      socialconnect_sakhi,
      socialconnect_profile
    ],
    source_code_link: "https://github.com/parithi029",
    live_link: null,
    route: "/project/socialconnect",
    cta_text: "→ Showcase ↗",
    coming_soon: false,
  },
  {
    name: "Interactive Developer Portfolio",
    description:
      "A high-performance interactive portfolio featuring custom 3D graphics, immersive animations, and optimized rendering for smooth user experiences.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Three.js", color: "green-text-gradient" },
      { name: "Framer Motion", color: "pink-text-gradient" },
    ],
    features: ["Three.js", "Animations", "Responsive Design", "Performance Optimized"],
    image: portfolio_ss,
    source_code_link: "https://github.com/parithi029",
    live_link: "https://parithi029.github.io/portfolio1/",
    cta_text: "→ Live Site ↗",
    coming_soon: false,
  },
  {
    name: "AI SaaS Platform",
    description:
      "An AI-powered SaaS platform with modern dashboard, authentication, and scalable backend architecture.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Supabase", color: "pink-text-gradient" },
    ],
    features: [],
    image: null,
    source_code_link: "#",
    live_link: null,
    coming_soon: true,
  },
  {
    name: "Full Stack Dashboard",
    description:
      "A comprehensive full stack dashboard with real-time analytics, data visualization, and role-based access control.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "REST APIs", color: "green-text-gradient" },
      { name: "Supabase", color: "pink-text-gradient" },
    ],
    features: [],
    image: null,
    source_code_link: "#",
    live_link: null,
    coming_soon: true,
  },
  {
    name: "Modern E-Commerce",
    description:
      "A feature-rich e-commerce platform with product management, cart functionality, and payment integration.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    features: [],
    image: null,
    source_code_link: "#",
    live_link: null,
    coming_soon: true,
  },
];

const certifications = [
  {
    name: "Google AI Essentials",
    issuer: "Google",
    color: "#4285F4",
    icon: "https://images.seeklogo.com/logo-png/62/1/google-new-logo-png_seeklogo-622426.png",
    image: google_certifi,
  },
  {
    name: "Cybersecurity for Beginners",
    issuer: "Microsoft + Tata STRIVE",
    color: "#00A4EF",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    image: tata_certifi,
  },
  {
    name: "Web Development",
    issuer: "EduSkills Academy",
    color: "#915EFF",
    icon: "https://eduskillsfoundation.org/wp-content/uploads/2020/06/cropped-logo-2-1.png",
    image: eduskill_certif,
  },
];

const whyWorkWithMe = [
  {
    title: "Performance Focused",
    description: "I build applications optimized for speed and scalability.",
    icon: "⚡",
  },
  {
    title: "Modern Technologies",
    description: "React, React Native, Python, Supabase, Tailwind CSS.",
    icon: "🛠️",
  },
  {
    title: "Clean Architecture",
    description: "Maintainable codebases following industry best practices.",
    icon: "🏗️",
  },
  {
    title: "Creative Problem Solving",
    description: "Engineering backed by strong design thinking.",
    icon: "💡",
  },
];

export {
  services,
  technologies,
  techCategories,
  experiences,
  projects,
  certifications,
  whyWorkWithMe,
};
