export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  embedCode?: string;
  slug?: string;
}

export interface ProjectsData {
  designProjects: Project[];
  codeProjects: Project[];
}