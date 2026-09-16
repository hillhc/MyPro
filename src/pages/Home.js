import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import myPhoto from '../resource/myPhoto.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { FaCode, FaRobot, FaEye, FaMicrochip } from 'react-icons/fa';

const skills = [
  [FaEye, 'Computer Vision', 'Object detection, pose estimation, and video analytics with OpenCV and YOLO.'],
  [FaRobot, 'Applied Machine Learning', 'Training and benchmarking CNNs and vision transformers for real-world image classification.'],
  [FaMicrochip, 'Edge AI Deployment', 'Optimizing PyTorch models with ONNX and deploying on Raspberry Pi and NPU-accelerated OrangePi.'],
  [FaCode, 'Backend & Automation', 'Python and Flask services, Redis and SQL data pipelines, and workflow automation.'],
];

function Home() {
  return (
    <main className="home">
      <section className="home-hero" aria-labelledby="home-heading">
        <div className="home-hero__copy">
          <p className="eyebrow">SOFTWARE ENGINEER AT BYTRONIC</p>
          <h1 id="home-heading"><span className="home-greeting">Hi, I'm Hill.</span><span className="home-headline">Welcome to my corner of the web.</span></h1>
          <p className="home-intro">Exploring software, computer vision, AI/ML, and how they meet.</p>
          <div className="home-actions">
            <Link className="primary-link" to="/project">Explore my projects <ArrowForwardIcon aria-hidden="true" /></Link>
            <Link className="secondary-link" to="/about">More about me <ArrowOutwardIcon aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="home-portrait"><img src={myPhoto} alt="Hill Choy" /></div>
      </section>
      <section className="skills" aria-labelledby="skills-heading">
        <p className="eyebrow">WHAT I WORK WITH</p>
        <h2 id="skills-heading">Skills &amp; interests</h2>
        <div className="skills-grid">
          {skills.map(([Icon, label, description]) => <div className="skill-item" key={label}><Icon aria-hidden="true" /><h3>{label}</h3><p>{description}</p></div>)}
        </div>
      </section>
    </main>
  );
}
export default Home;
