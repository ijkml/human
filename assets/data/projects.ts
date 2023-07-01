interface ProjectSchema {
  // project / company name
  name: string;
  // project roles
  roles: string;
  // project details
  details: string;
  // tools/tech used
  tools: string[];
  // link to case study / preview / source code
  link: string;
  // type of link
  linkType: 'demo' | 'live' | 'none';
  // image preview url
  image: string;
}

const sampleProject: ProjectSchema = {
  name: 'PennyPay Inc',
  roles: '',
  details: '',
  tools: [],
  link: '',
  linkType: 'demo',
  image: '',
};

export { sampleProject, ProjectSchema };
