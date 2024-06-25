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
                <Typography variant="subtitle1" sx={{ fontSize: "1.5rem",fontWeight: "bold" }}>
                  Final Year Project - Advanced Video Analytics and Edge AI for Smart Carpark Systems (2023-2024)
                </Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "1.2rem" }}>
                  Supervised by Dr. Gary Shueng Han CHAN
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Typography variant="body1" style={{ textAlign: "justify", fontSize: "1.2rem", marginBottom: "1rem" }}>
                The project involves the use of the latest object detection model, YOLOv8, with MobileNetV3 backbone structure, to design and train a
                model capable of detecting the presence of vehicles in parking spaces. This model can be deployed on edge devices with limited
                computational power (Raspberry Pi) to capture and determine if a parking slot is empty or occupied.
                The project also involves the design and building of a backend system structure and the use of LoRaWAN technology to transmit parking space availability information to
                the backend, which can then be used to inform drivers of available parking spaces.
              </Typography>
              <Typography variant="body1" style={{ textAlign: "justify", fontSize: "1.2rem", marginBottom: "1rem" }}>
                <div style="text-align: justify; font-size: 1.2rem; margin-bottom: 1rem;">
                  The project consisted of two main parts: Edge AI and Frontend Website:
                </div>
                <div style="text-align: justify; font-size: 1.2rem; margin-left: 1.5rem;">
                  1. **Edge AI**:
                  - The trained YOLOv8 model would detect cars and process vacancy information for each parking slot in the captured live stream of carparks, which was deployed on Raspberry Pi.
                  - The application then would pass the captured vacancy information to the backend AWS server via the LoRaWAN network.
                </div>
                <div style="text-align: justify; font-size: 1.2rem; margin-left: 1.5rem;">
                  2. **Frontend Website**:
                  - The backend server would process and merge the information from different edge devices and store it in the database.
                  - The result would then be presented on the frontend website.
                </div>
                <div style="text-align: justify; font-size: 1.2rem; margin-bottom: 1rem;">
                  The final version of the frontend can be found here: <a href="https://fyp-react-control-panel.pages.dev/" style={{ textDecoration: "none", color: "blue" }}>https://fyp-react-control-panel.pages.dev/</a>
                </div>
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