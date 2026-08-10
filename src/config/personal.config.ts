import type { ConfigType } from "../types";



export const PERSONAL_CONFIG:ConfigType = {
  hero: {
    name: "Ivan",
    lastName: "Usheff",
    role: "Backend / Full Stack Developer",
    description: "Desarrollador de software especializado en aplicaciones backend, APIs y arquitecturas de microservicios utilizando principalmente TypeScript, NestJS y Node.js.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Ivan-Usheff",
        icon: "github",
        target: true
      }
    ]
  },
  about: {
    description: "Soy desarrollador de software con experiencia en desarrollo backend, integración de sistemas y diseño de servicios. Me interesa especialmente trabajar en arquitecturas escalables, APIs, microservicios y soluciones que permitan resolver problemas reales mediante software.",
    image: "",
    media: []
  },
  skills: [
    {
      name: "TypeScript"
    },
    {
      name: "JavaScript"
    },
    {
      name: "Node.js"
    },
    {
      name: "NestJS"
    },
    {
      name: "React"
    },  
    {
      name: "PostgreSQL"
    },
    {
      name: "MongoDB",
    },
    {
      name: "TypeORM",
    },
    {
      name: "Docker",
    },
    {
      name: "Git",
    },
    {
      name: "WebSockets",
    },
    {
      name: "Apis REST",
    },
    {
      name: "Microservices",
    },
  ],
  projects: {
    description:"Algunos proyectos personales y profesionales en los que he trabajado....",
    projects: [
      {
        type: "Backend",
        name: "Config Service",
        technologies: ["NestJS", "TypeScript", "PostgreSQL"], 
        description: "Servicio centralizado de configuración diseñado para arquitecturas de microservicios.",
        links: [
          {
            name: "GitHub", 
            url: "#",
            icon: "github",
            target: true
          }
        ]
      },
      {
        type: "Backend",
        name: "Company BFF",
        technologies: ["NestJS", "TypeScript", "WebSockets"], 
        description: "Backend For Frontend encargado de conectar aplicaciones cliente con distintos microservicios.",
        links: [
          {
            name: "GitHub", 
            url: "#",
            icon: "github",
            target: true
          },
          {
            name: "Arquitectura", 
            url: "#",
            icon: "github",
            target: false
          }
        ]
      },
      {
        type: "Library",
        name: "Common Library",
        technologies: ["NestJS", "TypeScript", "WebSockets"], 
        description: "Librería reutilizable para proyectos NestJS con módulos, decoradores, entidades base y utilidades comunes.",
        links: [
          {
            name: "GitHub", 
            url: "#",
            icon: "github",
            target: true
          }
        ]
      },
      {
        type: "Proyecto Personal",
        name: "RPG 2D",
        technologies: ["Python", "Pygame"], 
        description: "Proyecto personal orientado al desarrollo de un RPG 2D aplicando conceptos de arquitectura de software, programación orientada a objetos y game loops.",
        links: [
          {
            name: "GitHub", 
            url: "#",
            icon: "github",
            target: true
          }
        ]
      }
    ]
  },
  contact: {
    message: "Estoy interesado en nuevas oportunidades profesionales relacionadas con desarrollo Backend y Full Stack.",
    links: [
      {
        name: "Email",
        url: "mailto:iusheff@gmail.com",
        icon: "email",
        target: false
      },
      {
        name: "GitHub",
        url: "https://github.com/Ivan-Usheff",
        icon: "github",
        target: true
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ivan-usheff",
        icon: "linkedin",
        target: true
      }
    ]
  }
}