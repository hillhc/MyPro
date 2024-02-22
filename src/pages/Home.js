import React from 'react';
import { Typography, Box, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import myPhoto from '../resource/myPhoto.jpg';

const AboutContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const PhotoContainer = styled('div')(({ theme }) => ({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  overflow: 'hidden',
  marginBottom: theme.spacing(2),
}));

const PhotoImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const SocialMediaContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
}));

const SocialMediaLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: theme.spacing(1),
}));

const SkillsContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const SkillCard = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  border: '1px solid black',
  borderRadius: theme.spacing(1),
}));

function Home() {
  return (
    <div>
      <AboutContainer>
        <PhotoContainer>
          <PhotoImage src={myPhoto} alt="myPhoto" />
        </PhotoContainer>
        <Typography variant="h4" component="h2" align="center">
          Hi, I'm Hill. Welcome!
        </Typography>
        <Typography variant="body1" align="center">
          I am a year 4 Computer Engineering student currently studying at HKUST
        </Typography>
        <SocialMediaContainer>
          <SocialMediaLink href="https://www.instagram.com/hill__hc/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.linkedin.com/in/hill-choy-hc/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </SocialMediaLink>
          <SocialMediaLink href="https://github.com/hillhc" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </SocialMediaLink>
          <SocialMediaLink href="mailto:hchoy@hillchoy.com">
            <EmailIcon />
          </SocialMediaLink>
        </SocialMediaContainer>
      </AboutContainer>

      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Skills
      </Typography>
      <SkillsContainer>
        <Grid container spacing={2} justifyContent="center">
          <SkillCard item xs={12} sm={6} md={4}>
            <Typography variant="h5" component="h2">
              Programming Languages
            </Typography>
            <Typography variant="body2" component="p">
              Python, C, C++, MySQL
            </Typography>
          </SkillCard>
          <SkillCard item xs={12} sm={6} md={4}>
            <Typography variant="h5" component="h2">
              Machine Learning and AI
            </Typography>
            <Typography variant="body2" component="p">
              Pytorch, Tensorflow and NLP related topics
            </Typography>
          </SkillCard>
          <SkillCard item xs={12} sm={6} md={4}>
            <Typography variant="h5" component="h2">
              Others
            </Typography>
            <Typography variant="body2" component="p">
              Linux, Arduino, Raspberry Pi, STM32, LoRaWAN
            </Typography>
          </SkillCard>
        </Grid>
      </SkillsContainer>
    </div>
  );
}

export default Home;