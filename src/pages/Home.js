import React, { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import Typewriter from 'typewriter-effect'; // Import from 'typewriter-effect' instead of 'react-typewriter-effect'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import myPhoto from "../resource/myPhoto.jpg";
import "../styles/Home.css";
import "../styles/about.css";

function Home() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    typewriterRef.current.typeString("Hi, I'm Hill. Welcome!")
      .pauseFor(2000)
      .deleteAll()
      .typeString("Hi, I'm Hill. Welcome!")
      .pauseFor(2000)
      .start();
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
            onInit={(typewriter) => {
              typewriterRef.current = typewriter;
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
    </div>
  );
}

export default Home;