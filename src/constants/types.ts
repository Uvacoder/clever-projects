export interface IProject {
  id: number;
  name: string;
  description: string;
  companyName: string;
  companyUrl: string;
  image: string;
  url: string;
  stack: string[];
  sku: string;
  team: number[];
  status: TStatus;
}

export interface IWorker {
  id: number;
  name: string;
  lastName: string;
  description: string;
  jobTitle: string;
  stack: string[];
  projects: number[];
  linkedIn: string;
}

export type TStatus = "DONE" | "PROGRESS" | "SUSPEND";
