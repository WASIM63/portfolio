export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string | null;
  githubUrl: string | null;
  liveUrl: string | null;
  featured?: boolean;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface Experience{
  company: string;
  start: string;
  end: string;
  role: string;
  location?: string;
  overview: string;
  technologies?: string[];
  description:string[];
}

interface Topics{
  image?:string;
  name:string;
}

export interface Skill{
  category: string;
  topics:Topics[];
}

export interface Education{
  degree:string;
  institution:string;
  start:number;
  end:number | string;
  description?:string;
  marks?:string | number;
}

export interface Gallery{
  title:string,
  category?: string,
  highlight?: string,
  description?:string[],
  date?:Date,
  location?:string,
  externalLink?:string[],
  photos:{
      img:string,
      description?:string,
    }[]
  videos?: {
    src: string,
    poster?: string,
    title?: string,
  }[]
}