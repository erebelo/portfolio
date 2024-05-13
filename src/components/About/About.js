import GetAppIcon from '@material-ui/icons/GetApp'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {social && (
          <>
            {social.resume && (
              <a
                href={social.resume}
                aria-label='resume'
                title='Resume'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <GetAppIcon className='large-icon' />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                title='GitHub'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon className='large-icon' />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                title='LinkedIn'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon className='large-icon' />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
