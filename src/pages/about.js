import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkIcon from '@mui/icons-material/Work';
import myResume from "../resource/resume.pdf"
import myResume2 from "../resource/resume2.pdf"
import backgroundabout from "../resource/backgroundabout.jpg"

function About() {
  return(
    <div className="About" style={{
      backgroundImage: `url(${backgroundabout})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      minHeight: '200vh'
    }}>
      <div className="Experience">
        <VerticalTimeline lineColor='#3e497a'>
          <VerticalTimelineElement 
          className="vertical-timelinbe-element--education" 
          date="2014 - 2020" 
          iconStyle={{background: '#3e497a', color : "#fff"}} 
          icon={<SchoolIcon />}> 
          <h3 className="vertical-timeline-element-title">The Hong Kong Sha Tin Methodist College</h3>
          <p>HKDSE Mathematics 5, Mathematics Extended Modules 2 5</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className="vertical-timelinbe-element--education" 
          date="2020 - Present" 
          iconStyle={{background: '#3e497a', color : "#fff"}} 
          icon={<SchoolIcon />}> 
          <h3 className="vertical-timeline-element-title">HKUST</h3>
          <p>BEng in Computer Engineering</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className="vertical-timelinbe-element--education" 
          date="2023 June - 2023 August" 
          iconStyle={{background: '#3e497a', color : "#fff"}} 
          icon={<WorkHistoryIcon />}> 
          <h3 className="vertical-timeline-element-title">HKT - Fixed Net Operation, ISPC</h3>
          <p>Summer Internship</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className="vertical-timelinbe-element--education" 
          date="2023 October - Current" 
          iconStyle={{background: '#128308', color : "#fff"}} 
          icon={<WorkIcon />}> 
          <h3 className="vertical-timeline-element-title">HKT - Fixed Net Operation, ISPC</h3>
          <p>Part Time Internship</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <a href={myResume} download style={{textDecoration: 'none'}}>
          <button style={{
            backgroundColor: '#3e497a',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'block',
            margin: '0 auto 10px' /* Add margin-bottom to create space */
          }}>Work Resume</button>
        </a>
        <a href={myResume2} download style={{textDecoration: 'none'}}>
          <button style={{
            backgroundColor: '#3e497a',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'block',
            margin: '0 auto'
          }}>Academic Resume</button>
        </a>
      </div>
    </div>
  )
}

export default About;
