const { REACT_APP_RESUME_LINK: RESUME_LINK } = process.env

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
    resume: RESUME_LINK,
    linkedin: 'https://www.linkedin.com/in/eduardo-rebelo',
    github: 'https://github.com/erebelo',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Spring MongoDB Demo',
    description:
      'REST API project developed in Java using Spring Boot 3 and MongoDB',
    stack: ['Java 17', 'Spring Boot 3', 'MongoDB', 'JUnit', 'Mockito'],
    sourceCode: 'https://github.com/erebelo/spring-mongodb-demo',
    livePreview:
      'https://api.erebelo.com/spring-mongodb-demo/swagger-ui/index.html',
  },
  {
    name: 'Spring Security JWT',
    description:
      'REST API project developed in Java using Spring Boot 3, Spring Security 6 for JWT Authentication and Authorization, and H2 database',
    stack: ['Java 17', 'Spring Boot 3', 'Spring Security 6', 'H2 Database'],
    sourceCode: 'https://github.com/erebelo/spring-security-jwt',
    livePreview:
      'https://jwt.erebelo.com/spring-security-jwt/swagger-ui/index.html',
  },
  {
    name: 'AWS Docker',
    description:
      'AWS deployment guide using Docker for Java App, UI App, and MongoDB instances. Additionally, Nginx setup as a reverse proxy for HTTP and HTTPS protocols',
    stack: ['AWS', 'Docker', 'Nginx', 'Wildcard SSL/TLS Certificate'],
    sourceCode: 'https://github.com/erebelo/aws-docker',
  },
  {
    name: 'Portfolio',
    description: 'UI project developed in React',
    stack: ['React'],
    sourceCode: 'https://github.com/erebelo/portfolio',
    livePreview: 'https://erebelo.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Spring Boot',
  'Spring Security',
  'Node.js',
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
