export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
  domain?:string;
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
  description:string[];
}

interface Topics{
  image:string;
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
  description?:string[],
  date?:string,
  location?:string,
  externalLink?:string[],
  photos:{
      img:string,
      description?:string,
    }[]
}