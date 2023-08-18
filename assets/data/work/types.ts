interface Project {
  name: string;
  // basic
  id: string;
  img: string;
  live: boolean;
  // basic end
  years: string;
  type: string; // contract/freelance/demo/??
  roles: string[];
  tools: string[];
}

export {};
