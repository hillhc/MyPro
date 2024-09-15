import React, { useState, useEffect } from 'react';
import "../styles/Home.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import myPhoto from "../resource/myPhoto.jpg";
import "../styles/about.css";
import backhome from "../resource/backhome.jpg";
import { FaCode, FaRobot, FaEye, FaLinux } from 'react-icons/fa'; // Import relevant icons

function Home() {
  const [text, setText] = useState('');
  const greetingText = "Hi, I'm Hill. Welcome!";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex === greetingText.length) {
        clearInterval(timer);
      }
      setText(greetingText.substring(0, currentIndex + 1));
      currentIndex++;
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="home">
      <div className="about">
        <div className="photo">
          <img src={myPhoto} alt="myPhoto" />
        </div>
        <h2>{text}</h2>
        <div className="prompt">
          <p>I am a recent graduate in Computer Engineering from HKUST</p>
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
      <div
        className="skills"
        style={{
          backgroundImage: `url(${backhome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          minHeight: '100vh',
          padding: '20px',
          color: 'white',
        }}
      >
        <h1>Skills</h1>
        <ol className='list'>
          <li className='listItem'>
            <FaCode size={30} />
            <h2>Programming</h2>
            <span>Python, C, C++</span>
          </li>
          <li className='listItem'>
            <FaRobot size={30} />
            <h2>AI/Machine Learning</h2>
            <span>Pytorch</span>
          </li>
          <li className='listItem'>
            <FaEye size={30} />
            <h2>Computer Vision</h2>
            <span>Related topics</span>
          </li>
          <li className='listItem'>
            <FaLinux size={30} />
            <h2>Linux/Edge Platform Development</h2>
            <span>Linux, Arduino, Raspberry Pi</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;