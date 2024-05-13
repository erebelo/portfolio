const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://erebelo.com',
  title: 'erebelo',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Eduardo Rebelo',
  role: 'Senior Software Engineer',
  description: '',
  social: {
    resume:
      'https://drive.google.com/file/d/18ydoechmDIgi65uBiH9xfrRaYH3h8qQC/view',
    linkedin: 'https://www.linkedin.com/in/eduardo-rebelo',
    github: 'https://github.com/erebelo',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Spring Boot',
  'Spring Security',
  'NodeJS',
  'Express',
  'AWS Cloud',
  'MongoDB',
  'JUnit',
  'Mockito',
  'Docker',
  'Maven',
  'Git',
  'Scrum',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'Eduardo Rebelo <eduldrebelo@gmail.com>',
}

export { header, about, projects, skills, contact }
