import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import Typewriter from 'react-typewriter-effect';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import myPhoto from "../resource/myPhoto.jpg";
import "../styles/Home.css";
import "../styles/about.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  return (
    <div className="home">
      <div className="about">
        <div className="photo">
          <img src={myPhoto} alt="myPhoto" />
        </div>
        <h2>
          <Typewriter
            options={{
              strings: ["Hi, I'm Hill. Welcome!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="prompt">
          <p>I am a year 4 Computer Engineering student currently studying at HKUST</p>
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
      <div className="skills-list">
        <Typography variant="h4" component="h2">
          Skills
        </Typography>
        <div className="skills-list">
          <Typography variant="h5" component="h3">
            Programming Languages
          </Typography>
          <Typography variant="body1" component="p">
            Python, C, C++, MySQL
          </Typography>
          <Typography variant="h5" component="h3">
            Machine Learning and AI
          </Typography>
          <Typography variant="body1" component="p">
            Pytorch, Tensorflow and NLP related topics
          </Typography>
          <Typography variant="h5" component="h3">
            Others
          </Typography>
          <Typography variant="body1" component="p">
            Linux, Arduino, Raspberry Pi, STM32, LoRaWAN
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Home;