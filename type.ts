export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  embedCode?: string;
  slug?: string;
  category?: string;
  client? : string;
}

export interface ProjectsData {
  designProjects: Project[];
  codeProjects: Project[];
}