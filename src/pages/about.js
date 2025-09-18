import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkIcon from '@mui/icons-material/Work';
import myResume from "../resource/Hill's Resume.pdf"
import backgroundabout from "../resource/backgroundabout.jpg"

function About() {
  /* WorkHistoryIcon*/
  return(
    <div className="About" style={{
      backgroundImage: `url(${backgroundabout})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      minHeight: '100vh'
    }}>
      <div className="Experience">
        <VerticalTimeline lineColor='#3e497a'>
          <VerticalTimelineElement 
          className="vertical-timelinbe-element--education" 
          date="2020 - 2024" 
          iconStyle={{background: '#3e497a', color : "#fff"}} 
          icon={<SchoolIcon />}> 
          <h3 className="vertical-timeline-element-title">HKUST</h3>
          <p>BEng in Computer Engineering</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className="vertical-timelinbe-element--education" 
          date="2023 June - 2023 August" 
          iconStyle={{background: '#3e497a', color : "#fff"}} 
          icon={<WorkIcon />}> 
          <h3 className="vertical-timeline-element-title">HKT - Fixed Net Operation, ISPC</h3>
          <p>Summer Internship</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className="vertical-timelinbe-element--education" 
          date="2023 October - 2025 April" 
          iconStyle={{background: '#3e497a', color : "#fff"}} 
          icon={<WorkIcon />}> 
          <h3 className="vertical-timeline-element-title">HKT - Fixed Net Operation, ISPC</h3>
          <p>Part Time Internship</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timelinbe-element--education" 
          date="2024 August - 2025 June" 
          iconStyle={{background: '#3e497a', color : "#fff"}} 
          icon={<WorkIcon  />}> 
          <h3 className="vertical-timeline-element-title">HKUST - CSE, Prof. Shueng-Han Gary Chan</h3>
          <p>Research Assistant</p> 
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className="vertical-timelinbe-element--education" 
          date="2025 September - Current" 
          iconStyle={{background: '#128308', color : "#fff"}} 
          icon={<SchoolIcon />}> 
          <h3 className="vertical-timeline-element-title">UCL</h3>
          <p>MSc Computer Graphics, Vision and Imaging</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <a href={myResume} download="Hill's Resume.pdf" style={{textDecoration: 'none'}}>
          <button style={{
            backgroundColor: '#3e497a',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'block',
            margin: '0 auto 10px'
          }}>
            Resume
          </button>
        </a>
      </div>
    </div>
  )
}

export default About;
