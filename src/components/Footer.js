import React from 'react'
import "../styles/Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <footer className='footer'>
        <div className= "socialMedia">
        <a aria-label="Instagram" href="https://www.instagram.com/hill__hc/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/hill-choy-hc/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a aria-label="GitHub" href="https://github.com/hillhc" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a aria-label="Email Hill" href="mailto:hchoy@hillchoy.com">
            <EmailIcon />
          </a>
        </div>
        <p> 2026 hillchoy.com</p>
    </footer>
  )
}

export default Footer
