import React from "react";
import { Card, CardContent, CardMedia, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import projectImage from "../resource/result3.jpg";
import "../styles/project.css";

function Project() {
  return (
    <div className="Project">
      <Card className="projectCard">
        <CardContent>
          <Typography variant="h4" component="div">
            Project List
          </Typography>
          <hr />
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography variant="subtitle1" sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Final Year Project - Advanced Video Analytics and Edge AI for Smart Carpark Systems (2023-2024)
                </Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "1.2rem" }}>
                  Supervised by Dr. Gary Shueng Han CHAN
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Typography variant="body1" style={{ textAlign: "justify", fontSize: "1.2rem", marginBottom: "1rem" }}>
                The project consisted of two main parts: Edge AI and Frontend Website:
              </Typography>
              <Typography variant="body1" style={{ textAlign: "justify", fontSize: "1.2rem", marginBottom: "1rem" }}>
                <b>Edge AI:</b>
                <ul>
                  <li>The trained YOLOv8 model would detect cars and process vacancy information for each parking slot in the captured live stream of carparks, which was deployed on Raspberry Pi.</li>
                  <li>The application then would pass the captured vacancy information to the backend AWS server via the LoRaWAN network.</li>
                </ul>
              </Typography>
              <Typography variant="body1" style={{ textAlign: "justify", fontSize: "1.2rem", marginBottom: "1rem" }}>
                <b>Frontend Website:</b>
                <ul>
                  <li>The backend server would process and merge the information from different edge devices and store it in the database.</li>
                  <li>The result would then be presented on the frontend website.</li>
                </ul>
              </Typography>
              <Typography variant="body1" style={{ textAlign: "justify", fontSize: "1.2rem", marginBottom: "1rem" }}>
                The frontend website can be found at: <a href="https://fyp-react-control-panel.pages.dev/" style={{ textDecoration: "none", color: "blue" }}>https://fyp-react-control-panel.pages.dev/</a>
              </Typography>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <img src={projectImage} alt="Project Image" style={{ width: "50%", height: "auto", objectFit: "cover" }} />
              </div>
              <Typography variant="body1" style={{ textAlign: "justify", fontSize: "1.2rem", marginBottom: "1rem" }}>
                More details about the project can be found at: 
                <a href="http://eek123.ust.hk/SmartCarpark" style={{ textDecoration: "none", color: "blue" }}>http://eek123.ust.hk/SmartCarpark</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <hr />
        </CardContent>
      </Card>
    </div>
  );
}

export default Project;