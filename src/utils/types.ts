export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  tools: string[];
  url: string;
}

export interface BlogPost {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
  url: string;
}
