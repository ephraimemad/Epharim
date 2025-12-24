
export interface Service {
  id: string;
  title: string;
  problem: string;
  target: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  approach: string;
  tools: string[];
  value: string;
}

export interface ContentStrategy {
  platform: string;
  strategy: string;
  value: string;
}
