import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import "../styles/Home.css";
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
        <h2>Hi, I'm Hill. Welcome!</h2>
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
      <h1>Skills</h1>
      <div className="skills">
        <Card className="skillCard" sx={{ border: '1px solid black' }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Programming Languages
            </Typography>
            <Typography variant="body2" component="p">
              Python, C, C++, MySQL
            </Typography>
          </CardContent>
        </Card>
        <Card className="skillCard" sx={{ border: '1px solid black' }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Machine Learning and AI
            </Typography>
            <Typography variant="body2" component="p">
              Pytorch, Tensorflow and NLP related topics
            </Typography>
          </CardContent>
        </Card>
        <Card className="skillCard" sx={{ border: '1px solid black' }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Others
            </Typography>
            <Typography variant="body2" component="p">
              Linux, Arduino, Raspberry Pi, STM32, LoRaWAN
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;