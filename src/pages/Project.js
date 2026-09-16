import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import projectImage from "../resource/result3.jpg";
import "../styles/project.css";

function Project() {
  return (
    <main className="projects-page">
      <header className="projects-heading">
        <p className="eyebrow">SELECTED WORK</p>
        <h1>Projects</h1>
        <p>A closer look at what I've built.</p>
      </header>
      <Accordion className="project-card" disableGutters elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="zoritex-heading" aria-controls="zoritex-details">
          <div>
            <p className="project-meta">MSC INDUSTRY DISSERTATION / JUN 2026 - SEP 2026</p>
            <h2>Computer Vision for Automated Textile Sorting by Colour</h2>
            <p className="project-supervisor">UCL in partnership with <a href="https://www.zoritex.com/" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()}>Zori Tex</a></p>
          </div>
        </AccordionSummary>
        <AccordionDetails id="zoritex-details" className="project-details">
          <p className="project-overview">Built a multi-view computer vision pipeline to name fabric colours and detect multi-coloured textiles for sorting.</p>
          <div className="project-columns">
            <section>
              <h3>Approach</h3>
              <p>Fine-tuned ConvNeXt-Tiny and combined predictions across views, benchmarking against classical methods, alternative deep models, and vision-language models.</p>
            </section>
            <section>
              <h3>Key finding</h3>
              <p>A model-assisted label audit and human review revealed that label quality and ambiguous colour categories limited performance. Correcting labels improved multi-colour detection.</p>
            </section>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="project-card" disableGutters elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="carpark-heading" aria-controls="carpark-details">
          <div>
            <p className="project-meta">FINAL YEAR PROJECT / 2023 - 2024</p>
            <h2>Advanced Video Analytics and Edge AI for Smart Carpark Systems</h2>
            <p className="project-supervisor">Supervised by Dr. Gary Shueng Han CHAN</p>
          </div>
        </AccordionSummary>
        <AccordionDetails id="carpark-details" className="project-details">
          <p>The project consisted of two main parts: Edge AI and Frontend Website.</p>
          <img className="project-preview" src={projectImage} alt="Smart carpark system project preview" />
          <div className="project-columns">
            <section>
              <h3>Edge AI</h3>
              <ul>
                <li>The trained YOLOv8 model would detect cars and process vacancy information for each parking slot in the captured live stream of carparks, which was deployed on Raspberry Pi.</li>
                <li>The application then would pass the captured vacancy information to the backend AWS server via the LoRaWAN network.</li>
              </ul>
            </section>
            <section>
              <h3>Frontend Website</h3>
              <ul>
                <li>The backend server would process and merge the information from different edge devices and store it in the database.</li>
                <li>The result would then be presented on the frontend website.</li>
              </ul>
            </section>
          </div>
          <div className="project-links">
            <a className="primary-link" href="https://fyp-react-control-panel.pages.dev/">View frontend website <ArrowOutwardIcon aria-hidden="true" /></a>
          </div>
        </AccordionDetails>
      </Accordion>
    </main>
  );
}
export default Project;
