import React from 'react'
import "../styles/Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className='footer'>
        <div className= "socialMedia">
        <a href="https://www.instagram.com/hill__hc/">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/hill-choy-hc/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/hillhc">
            <GitHubIcon />
          </a>
          <a href="mailto:hchoy@hillchoy.com">
            <EmailIcon />
          </a>
        </div>
        <p> &copy; 2024 hillchoy.com</p>
    </div>
  )
}

export default Footer