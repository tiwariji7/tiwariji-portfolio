
export interface Skill {
  name: string;
  icon: string;
  description: string;
  category: 'Programming' | 'Web' | 'App/Backend' | 'Tools';
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveLink?: string;
  githubLink: string;
}

export interface Experience {
  role: string;
  company: string;
  logo: string;
  period: string;
  description: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  logo: string;
  year: string;
}
