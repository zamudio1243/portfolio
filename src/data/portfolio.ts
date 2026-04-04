import type { PortfolioData } from "./interfaces/data";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Héctor Mauricio Zamudio Domínguez",
    role: "Fullstack Developer",
    headline: "Hola, soy Héctor Zamudio",
    subtitle:
      "Construyo productos de principio a fin: APIs robustas, arquitecturas serverless en AWS e interfaces modernas con React y Next.js.",
    bio: [
      "Desarrollador Fullstack con experiencia en proyectos para logística, RRHH, inmobiliaria, e-commerce y movilidad. He trabajado con Node.js, NestJS y AWS para diseñar sistemas escalables y de alto impacto.",
      "Me apasiona la entrega end-to-end: desde el diseño de la arquitectura hasta el deploy en producción, con foco en calidad, automatización y buenas prácticas de CI/CD.",
    ],
    profileImage: "/profile.jpg",
    email: "zamudio1243@gmail.com",
    resumeUrl: "/resume.pdf",
    location: "Zacatecas, Mexico",
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/zamudio1243",
      label: "Ver perfil de GitHub",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/hectorzamdom",
      label: "Ver perfil de LinkedIn",
    },
  ],
  skills: [
    { name: "TypeScript", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "NestJS", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "GraphQL", category: "Backend" },
    { name: "Serverless", category: "Backend" },
    { name: "AWS", category: "Backend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "Docker", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Nuxt.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Flutter", category: "Mobile" },
    { name: "Jetpack Compose", category: "Mobile" },
    { name: "GitHub Actions", category: "Backend" },
    { name: "OpenAI", category: "Backend" },
    { name: "LangChain", category: "Backend" },
  ],
  skillHighlights: [
    {
      title: "AWS Certified",
      description:
        "Cloud Practitioner certificado. Experiencia con Lambda, API Gateway, S3, RDS, SQS, EventBridge y Cognito.",
    },
    {
      title: "Fullstack End-to-End",
      description:
        "Entrego productos completos: desde APIs serverless y arquitecturas de microservicios hasta interfaces modernas con React y Next.js.",
    },
    {
      title: "AI Integration",
      description:
        "Implementé features con OpenAI API y LangChain para análisis de sentimiento, clustering y automatización de encuestas.",
    },
  ],
  projects: [
    {
      title: "Migración TMS — Grupo Estrella Roja",
      description:
        "Migración de un TMS crítico hacia una nueva arquitectura serverless en AWS, diseñada para gestionar la totalidad de las operaciones logísticas.",
      image: "/estrella_roja.jpg",
      tags: ["NestJS", "Serverless", "AWS", "GitHub Actions"],
      category: "Backend",
    },
    {
      title: "Permergas — Gestión de Flotas",
      description:
        "Sistema de gestión de flotas y líneas de crédito para gasolinera: reportes de cobro automatizados y suspensión por falta de pago.",
      image: "/permergas.jpg",
      tags: ["NestJS", "TypeScript", "SQL Server", "GitHub Actions", "AWS"],
      category: "Backend",
    },
    {
      title: "Javer — CMS & Blog Inmobiliaria",
      description:
        "Backend para el CMS y blog de la inmobiliaria Javer, con soporte en frontend Next.js para implementación de componentes y diseño de vistas.",
      image: "/javer.jpg",
      tags: ["Express.js", "Next.js"],
      category: "Web",
    },
    {
      title: "Proximity Parks — Control de Accesos",
      description:
        "Backend para control de accesos en parques industriales con integración de webhooks a cámaras Hikvision para monitoreo en tiempo real.",
      image: "/proximity.jpg",
      tags: ["Nx.dev", "TypeScript", "AWS"],
      category: "Backend",
    },

    {
      title: "Grupo Excelencia — Migración RDS",
      description:
        "Migración de base de datos productiva de entorno dockerizado en EC2 hacia Amazon RDS, mejorando escalabilidad y seguridad operativa.",
      image: "/grupo_excelencia.jpg",
      tags: ["AWS", "PostgreSQL"],
      category: "Backend",
    },
    {
      title: "App Rendilitros — Lealtad",
      description:
        "Backend para app móvil de lealtad de combustible: alta de usuarios y procesamiento de transacciones para acumulación de puntos.",
      image: "/rendichicas.jpg",
      tags: ["Express.js", "TypeScript", "PostgreSQL"],
      category: "Backend",
    },
    {
      title: "Sistema RRHH — Bambú Tech",
      description:
        "Backend integral para sistema interno de RRHH: gestión de tareas, solicitudes de vacaciones, altas/bajas y reportes de costos de proyectos con análisis por IA.",
      image: "/bambu.jpg",
      tags: ["Nx.dev", "AWS", "OpenAI"],
      category: "Backend",
    },
    {
      title: "Codisa E-Commerce",
      description:
        "E-commerce de ropa construido con Vue.js y Nuxt.js. Lideré la migración de la pasarela de pagos de Stripe a OpenPay (BBVA) en front y back.",
      image: "/codisa.jpg",
      tags: ["Vue.js", "Nuxt.js", "Node.js", "Strapi"],
      category: "Web",
    },
    {
      title: "Sistema de Facturación — Forprint",
      description:
        "Sistema completo de facturación y control de inventario con Node.js y GraphQL, automatizando procesos manuales y reduciendo tiempos de sincronización.",
      image: "/forprint.jpg",
      tags: ["Ts.ED", "GraphQL"],
      category: "Backend",
    },
    {
      title: "Apps Ride-Sharing — GMAR",
      description:
        "Dos apps móviles de ride-sharing desarrolladas desde cero: una nativa para Android con Jetpack Compose y otra multiplataforma con Flutter, ambas conectadas vía GraphQL.",
      image: "/gmar.jpg",
      tags: ["Flutter", "Jetpack Compose", "GraphQL"],
      category: "Mobile",
    },
  ],
  projectCategories: ["All", "Web", "Backend", "Mobile"],
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      image: "/aws.png",
      imageBg: "#FFFFFF",
      date: "Nov 2024",
      expiresDate: "Nov 2027",
      credentialUrl:
        "https://www.credly.com/badges/346d3735-57be-45e8-9071-2e198a8ca92c/linked_in_profile",
    },
    {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      image: "/anthropic.png",
      imageBg: "#D4A27F",
      date: "Mar 2025",
      credentialUrl: "https://verify.skilljar.com/c/6uioxjogoy6b",
    },
    {
      title: "Next.js App Router Fundamentals",
      issuer: "Vercel",
      image: "/vercel.svg",
      imageBg: "#FFFFFF",
      date: "Mar 2025",
      credentialUrl:
        "https://nextjs.org/learn/certificate?course=dashboard-app&user=152306&certId=dashboard-app-152306-1774331035660",
    },
  ],
};
