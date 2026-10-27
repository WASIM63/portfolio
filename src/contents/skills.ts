import { Skill } from "@/types";

export const skills: Skill[] = [
  { category: "Backend development", topics: ["Node.js", "NestJS", "Express.js", "TypeScript", "JavaScript", "REST APIs", "WebSockets", "Authentication & authorization", "JWT", "Passport.js", "OAuth 2.0", "EJS"].map((name) => ({ name })) },
  { category: "Databases and data access", topics: ["MySQL", "PostgreSQL", "MongoDB", "TypeORM", "Mongoose", "Database schema design", "Database migrations"].map((name) => ({ name })) },
  { category: "Caching and async processing", topics: ["Redis", "BullMQ", "Queue jobs", "Background processing", "Cron jobs", "Webhooks"].map((name) => ({ name })) },
  { category: "Integrations and communication", topics: ["Stripe", "MSG91", "Firebase", "Nodemailer", "Payment integrations", "Email and messaging workflows"].map((name) => ({ name })) },
  { category: "Cloud, deployment, and infrastructure", topics: ["AWS", "AWS Lightsail", "Docker", "Linux", "Nginx", "PM2", "Vercel", "Render"].map((name) => ({ name })) },
  { category: "Frontend and mobile development", topics: ["React", "Next.js", "React Native", "HTML", "CSS", "Tailwind CSS", "Bootstrap"].map((name) => ({ name })) },
  { category: "Developer tools", topics: ["Git", "GitHub", "Postman", "Swagger", "VS Code"].map((name) => ({ name })) },
];
