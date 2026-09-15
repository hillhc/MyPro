import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import myResume from "../resource/Hill's Resume.pdf";
import "../styles/about.css";

const experience = [
  { company: "Bytronic Vision Intelligence", role: "Software Engineer", date: "Current role" },
  {
    company: "HKUST · CSE",
    role: "Research Assistant",
    date: "Aug 2024 — Jun 2025",
    detail: "Prof. Shueng-Han Gary Chan",
  },
  {
    company: "HKT · Fixed Net Operation, ISPC",
    role: "Part Time Internship",
    date: "Oct 2023 — Apr 2025",
  },
  {
    company: "HKT · Fixed Net Operation, ISPC",
    role: "Summer Internship",
    date: "Jun 2023 — Aug 2023",
  },
];

function About() {
  return (
    <main className="about-page">
      <div className="about-page__container">
        <header className="about-page__hero">
          <p className="about-page__eyebrow">ABOUT ME</p>
          <h1>Hi, I'm Hill.<br /><span>Engineering meets curiosity.</span></h1>
          <p className="about-page__intro">
            My journey spans software engineering, research, and computer engineering,
            with a focus on computer graphics, vision and imaging at UCL.
          </p>
          <div className="about-page__actions">
            <a className="about-page__button" href={myResume} download="Hill's Resume.pdf">
              <DownloadIcon aria-hidden="true" /> Download résumé
            </a>
            <Link className="about-page__project-link" to="/project">
              Explore my projects <ArrowForwardIcon aria-hidden="true" />
            </Link>
          </div>
        </header>
        <div className="about-page__journey">
          <section className="about-page__experience" aria-labelledby="experience-heading">
            <div className="about-page__section-heading">
              <WorkOutlineIcon aria-hidden="true" />
              <h2 id="experience-heading">Experience</h2>
            </div>
            <ol className="about-page__timeline">
              {experience.map(({ company, role, date, detail }, index) => (
                <li className={`about-page__entry${index === 0 ? " about-page__entry--featured" : ""}`} key={`${company}-${role}`}>
                  <div className="about-page__entry-top">
                    <p className="about-page__company">{company}</p>
                    {date && <p className="about-page__date">{date}</p>}
                  </div>
                  <h3>{role}</h3>
                  {detail && <p className="about-page__detail">{detail}</p>}
                </li>
              ))}
            </ol>
          </section>
          <section className="about-page__education" aria-labelledby="education-heading">
            <div className="about-page__section-heading">
              <SchoolIcon aria-hidden="true" />
              <h2 id="education-heading">Education</h2>
            </div>
            <p className="about-page__note">Grounded in engineering, driven by curiosity.</p>
            <div className="about-page__education-card">
              <p className="about-page__date">Sep 2025 — Sep 2026</p>
              <h3>UCL</h3>
              <p>MSc Computer Graphics, Vision and Imaging</p>
            </div>
            <div className="about-page__education-card">
              <p className="about-page__date">Sep 2020 — Jul 2024</p>
              <h3>HKUST</h3>
              <p>BEng in Computer Engineering</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default About;
