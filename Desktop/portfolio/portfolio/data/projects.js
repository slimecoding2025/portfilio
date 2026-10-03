// Add a new project by appending an object here — nothing else in the app
// needs to change. `accent` picks which signal color rims the row on hover.

export const projectsData = [
  {
    id: "pagecraft-ai",
    name: "PageCraft AI",
    image: "/pagecraft.png",
    category: { 
      en: "AI Landing Page & UI Blueprint Generator", 
      de: "KI-Landing-Page- & UI-Blueprint-Generator" 
    },
    description: {
      en: "An AI studio transforming simple ideas into complete, high-converting landing page blueprints, marketing copy, and ready-to-use React + Tailwind CSS code.",
      de: "Ein KI-Studio, das einfache Ideen in vollständige Landing-Page-Blueprints, Marketing-Texte und einsatzbereiten React + Tailwind CSS-Code verwandelt.",
    },
    url: "https://pagecraft-self-mu.vercel.app/",
    tags: ["Next.js 14", "OpenRouter AI", "Tailwind CSS", "Framer Motion"],
    accent: "cyan",
  },
  {
    id: "memora",
    name: "MEMORA",
    image: "/memora.png", 
    category: { 
      en: "AI Personal Knowledge & Second Brain", 
      de: "KI-Persönliches Wissensnetzwerk & Second Brain" 
    },
    description: {
      en: "A unified personal knowledge hub and second brain to capture ideas, notes, links, files, and audio with instant Ctrl+K search, interactive memory maps, timeline view, and offline auto-sync.",
      de: "Ein zentraler persönlicher Wissens-Hub und Second Brain zum Erfassen von Ideen, Notizen, Links, Dateien und Audio mit Ctrl+K-Suche, interaktiver Memory-Map, Timeline und Offline-Synchronisierung.",
    },
    url: "https://memoraa-three.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Interactive Map", "Offline Sync"],
    accent: "emerald",
  },
  {
    id: "breachmind",
    name: "BreachMind",
    image: "/breach.png", 
    category: { 
      en: "AI Adversary Emulation & Attack Flow Generator", 
      de: "KI-Gegner-Emulation & Angriffsfluss-Generator" 
    },
    description: {
      en: "An AI threat-emulation suite mapping tech-stack vulnerabilities to MITRE ATT&CK kill-chains with interactive attack graphs and remediation tips.",
      de: "Eine KI-Bedrohungsemulations-Suite, die Schwachstellen in Technologie-Stacks auf MITRE ATT&CK-Angriffsketten mit interaktiven Graphen mappt.",
    },
    url: "https://breach-mind-sec.vercel.app/",
    tags: ["Next.js", "AI Integration", "MITRE ATT&CK", "Tailwind CSS"],
    accent: "cyan",
  },
  {
    id: "omnidraft-ai",
    name: "OmniDraft AI",
    image: "/omnidarf.png", 
    category: { 
      en: "AI Multimedia & Content Transformer", 
      de: "KI-Multimedia & Content-Transformer" 
    },
    description: {
      en: "An all-in-one AI content studio transforming simple ideas or articles into ready-to-use social posts, timed video scripts, summary cards, and visual prompts.",
      de: "Ein All-in-One KI-Content-Studio, das einfache Ideen oder Artikel in einsatzbereite Social-Posts, Video-Skripte, Zusammenfassungskarten und visuelle Prompts verwandelt.",
    },
    url: "https://omnidarf.vercel.app/", 
    tags: ["Next.js 14", "OpenRouter AI", "Tailwind CSS", "Framer Motion"],
    accent: "violet",
  },
  {
    id: "venturemind-ai",
    name: "VentureMind AI",
    image: "/venture.png", 
    category: { 
      en: "AI Business Strategy & Pitch Deck Generator", 
      de: "KI-Geschäftsstrategie & Pitch-Deck-Generator" 
    },
    description: {
      en: "An AI-powered platform transforming one-line business ideas into full Business Model Canvases, SWOT analyses, and investor-ready pitch decks.",
      de: "Eine KI-gestützte Plattform, die einzeilige Geschäftsideen in vollständige Business Model Canvases, SWOT-Analysen und investor-ready Pitch Decks verwandelt.",
    },
    url: "https://venturemind-ai-iota.vercel.app/",
    tags: ["Next.js 14", "OpenRouter AI", "Tailwind CSS", "Framer Motion"],
    accent: "amber",
  },
  {
    id: "aegisops",
    name: "AegisOps",
     image: "/aegis.png", 
    category: { en: "AI Security Audit Console & PWA", de: "KI-Sicherheitsaudit-Konsole & PWA" },
    description: {
      en: "An installable PWA security auditing suite that evaluates HTTP request payloads and source code against OWASP Top 10 risks with automated AI patch generation.",
      de: "Eine installierbare PWA-Sicherheitsaudit-Suite, die HTTP-Request-Payloads und Quellcode auf OWASP Top 10-Risiken prüft und automatische KI-Patches generiert.",
    },
    url: "https://aegis-sec.vercel.app/",
    tags: ["Next.js 14", "PWA", "AI Security", "Tailwind CSS"],
    accent: "cyan",
  },
  {
    id: "nexora-agency",
    name: "Nexora Agency",
     image: "/nexora.png", 
    category: { en: "Digital Agency Platform", de: "Digitalagentur-Plattform" },
    description: {
      en: "A sleek agency landing site crafting web apps, AI chatbots, and software solutions with high-end typography and an interactive dark-mode UI.",
      de: "Eine elegante Agentur-Website für Webanwendungen, KI-Chatbots und Softwarelösungen mit hochwertiger Typografie und interaktivem Dark-Mode-UI.",
    },
    url: "https://nexora-agency-five.vercel.app/",
    tags: ["Full-Stack", "UI/UX", "Web Animation", "Vercel"],
    accent: "cyan",
  },
  {
    id: "bac-fel-jib-ai",
    name: "Bac Fel Jib AI",
     image: "/bac.png", 
    category: { en: "AI Educational Assistant", de: "KI-Lernassistent" },
    description: {
      en: "An AI-powered companion for Tunisian Baccalauréat students, assisting with methodology, essay writing, philosophy, and comprehension.",
      de: "Ein KI-gestützter Begleiter für tunesische Abiturienten, der bei Methodik, Aufsatzschreiben, Philosophie und Textverständnis unterstützt.",
    },
    url: "https://bac-fel-jib.vercel.app/",
    tags: ["AI Integration", "Next.js", "Tailwind CSS"],
    accent: "violet",
  },
  {
    id: "aurazur",
    name: "Aurazur",
     image: "/aurazur.png", 
    category: { en: "Luxury Real Estate Platform", de: "Premium-Immobilienplattform" },
    description: {
      en: "A modern, minimalist real-estate web application for buying, selling, and renting property across Nabeul & Hammamet.",
      de: "Eine moderne, minimalistische Immobilien-Webanwendung für Kauf, Verkauf und Vermietung in Nabeul & Hammamet.",
    },
    url: "https://aurazur.vercel.app/",
    tags: ["Real Estate UI", "Filtering", "Clean Design"],
    accent: "amber",
  },
  {
    id: "cosmos-ai",
    name: "COSMOS AI",
     image: "/cosmos.png", 
    category: { en: "Futuristic AI & Space Exploration UI", de: "Futuristisches KI- & Weltraum-UI" },
    description: {
      en: "A high-tech, particle-interactive web experience showcasing cosmic AI data processing and interactive universe exploration.",
      de: "Ein High-Tech-Weberlebnis mit interaktiven Partikeln, das kosmische KI-Datenverarbeitung und interaktive Weltraumerkundung zeigt.",
    },
    url: "https://cosmos-kappa-indol.vercel.app/",
    tags: ["Interactive Canvas", "Cyber UI", "WebGL"],
    accent: "violet",
  },
  {
    id: "aegis-security",
    name: "AEGIS SECURITY",
     image: "/aegissec.png", 
    category: { en: "Cybersecurity & Digital Protection", de: "Cybersicherheit & Datenschutz" },
    description: {
      en: "A sleek security-consultation platform featuring terminal emulation and live threat-monitoring metrics.",
      de: "Eine elegante Plattform für Sicherheitsberatung mit Terminal-Emulation und Live-Metriken zur Bedrohungsüberwachung.",
    },
    url: "https://aegis-sec.vercel.app/",
    tags: ["Security UI", "Terminal Sim", "Cyber Aesthetic"],
    accent: "cyan",
  },
];
