export interface Client {
  name: string;
  url: string;
  description: string;
  services: string[];
  tag?: string;
  featured: boolean;
}

export const clients: Client[] = [
  {
    name: "Surflux",
    url: "https://surflux.dev",
    description: "Took an existing product with no branding and built the brand, website, and social media presence. Managed partnership discussions and go-to-market strategy.",
    services: ["Branding", "Web Development", "Social Media", "GTM Strategy"],
    featured: false,
  },
  {
    name: "LoadBetter",
    url: "https://loadbetter.com",
    description: "Website redesign, brand positioning, social media strategy, SEO, and content development.",
    services: ["Web Design", "SEO", "Content", "Brand Strategy"],
    featured: true,
  },
  {
    name: "Vino si Vezi",
    url: "https://vinosivezi.ro",
    description: "Built the platform from the ground up including landing pages, payments, and a volunteer management dashboard.",
    services: ["Web Development", "Payments", "Dashboard", "UX Design"],
    featured: true,
  },
  {
    name: "Meridian Freight",
    url: "https://meridian-freight-smart.lovable.app",
    description: "Full concept build — branding, logo design, and website, all created from scratch.",
    tag: "Concept",
    services: ["Branding", "Logo Design", "Web Development"],
    featured: false,
  },
  {
    name: "Blanc Smile Studio",
    url: "https://blanc-smile-studio.lovable.app",
    description: "Full concept build — branding, logo design, and website, all created from scratch.",
    tag: "Concept",
    services: ["Branding", "Logo Design", "Web Development"],
    featured: false,
  },
  {
    name: "Maison Claret",
    url: "https://maison-story-builder.lovable.app",
    description: "Built the website, branding, logo, and design from scratch. Payments integration and booking system ready to connect.",
    tag: "Concept",
    services: ["Branding", "Logo Design", "Web Development", "Design"],
    featured: true,
  },
  {
    name: "Sovereign Motors",
    url: "https://elevate-the-drive-app.lovable.app",
    description: "Built the website, branding, logo, and design. Includes a backend for managing the car collection. Contact form and CRM integration ready.",
    tag: "Concept",
    services: ["Branding", "Logo Design", "Web Development", "Backend"],
    featured: true,
  },
  {
    name: "Atheneum Medical",
    url: "https://atheneum-elegance.lovable.app",
    description: "Built the website, branding, logo, and design. CRM integration available for patient data management.",
    tag: "Concept",
    services: ["Branding", "Logo Design", "Web Development", "Design"],
    featured: true,
  },
  {
    name: "Form & Void Studio",
    url: "https://space-is-feeling.lovable.app",
    description: "Built the website, branding, logo, and design from scratch.",
    tag: "Concept",
    services: ["Branding", "Logo Design", "Web Development", "Design"],
    featured: false,
  },
  {
    name: "Vault Motors",
    url: "https://vault-drive-suite.lovable.app",
    description: "Built the website, branding, logo, and design. Includes a backend for managing car inventory. Contact form and CRM integration ready.",
    tag: "Concept",
    services: ["Branding", "Logo Design", "Web Development", "Backend"],
    featured: false,
  },
  {
    name: "Ember & Oak",
    url: "https://flame-to-table-dev.lovable.app",
    description: "Built the website, branding, logo, and design. Backend ready for table reservations with custom rules and manual registrations.",
    tag: "Concept",
    services: ["Branding", "Logo Design", "Web Development", "Backend"],
    featured: true,
  },
];
