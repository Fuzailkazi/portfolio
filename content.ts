export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
}

export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

export interface PortfolioContent {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  about: {
    title: string;
    bio: string[];
  };
  selectedWork: {
    title: string;
    projects: Project[];
  };
  howIWork: {
    title: string;
    steps: Step[];
  };
  writing: {
    title: string;
    posts: Post[];
  };
  contact: {
    title: string;
    email: string;
    github: string;
    linkedin: string;
  };
}

export const content: PortfolioContent = {
  hero: {
    title: "Hi, I'm a Creative Developer",
    subtitle: "I design and build beautiful, highly interactive web applications.",
    ctaText: "View My Work",
  },
  about: {
    title: "About Me",
    bio: [
      "I am a passionate software engineer focusing on standard-compliant, premium user experiences and robust frontend architectures.",
      "With a strong eye for detail, I translate designs into pixel-perfect and highly performant interfaces."
    ],
  },
  selectedWork: {
    title: "Selected Work",
    projects: [
      {
        id: "project-1",
        title: "E-commerce Platform",
        description: "A high-performance modern e-commerce storefront with complex transition states and modular UI library.",
        tags: ["Next.js", "Tailwind CSS", "TypeScript"],
        link: "https://github.com",
      },
      {
        id: "project-2",
        title: "Creative Agency Website",
        description: "An interactive marketing site featuring heavy WebGL effects and dynamic animations.",
        tags: ["Three.js", "React", "GSAP"],
        link: "https://github.com",
      }
    ],
  },
  howIWork: {
    title: "How I Work",
    steps: [
      {
        id: "step-1",
        title: "1. Strategy & Research",
        description: "Analyzing constraints, target audience, and architecture before laying a single stone.",
      },
      {
        id: "step-2",
        title: "2. Design & Prototype",
        description: "Crafting modern interactions, establishing typographic hierarchy, and selecting semantic colors.",
      },
      {
        id: "step-3",
        title: "3. Development & Polish",
        description: "Building components with optimized static configurations, strict TypeScript, and comprehensive testing.",
      }
    ],
  },
  writing: {
    title: "Writing",
    posts: [
      {
        id: "post-1",
        title: "Styling Next.js 16 with Tailwind CSS v4 CSS variables",
        date: "June 12, 2026",
        excerpt: "Learn how Tailwind v4's CSS-first theme configuration simplifies design token integrations.",
        link: "/writing/tailwind-v4",
      },
      {
        id: "post-2",
        title: "Architecting Web Apps for Static Export",
        date: "May 25, 2026",
        excerpt: "Key patterns and pitfalls when building client-side apps without a Node server runtime.",
        link: "/writing/static-export",
      }
    ],
  },
  contact: {
    title: "Get In Touch",
    email: "developer@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};
