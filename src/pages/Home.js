import React from 'react'
import "../styles/Home.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import myPhoto from "../resource/myPhoto.jpg";
import "../styles/about.css";
import backhome from "../resource/backhome.jpg";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="photo">
          <img src={myPhoto} alt="myPhoto" />
        </div>
        <h2>Hi, I'm Hill. Welcome !</h2>
        <div className="prompt">
          <p>I am a yaer 4 Computer Engineering student currently studenting at HKUST</p>
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
      </div>
      <div className="skills" style={{
        backgroundImage: `url(${backhome})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        minHeight: '100vh'
      }}>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='listItem'>
            <h2>Programming Languages</h2>
            <span>Python, C, C++, MySQL</span>
          </li>
          <li className='listItem'>
            <h2>Web Development (Learning) </h2>
            <span>HTML, CSS, React, Javascript</span>
          </li>
          <li className='listItem'>
            <h2>Others</h2>
            <span>Linux, Arduino, Raspberry Pi, STM32</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home