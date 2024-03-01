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
            <AccordionDetails style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="body1" style={{ textAlign: "justify", fontSize: "1.2rem", marginBottom: "1rem" }}>
                The project involves the use of the latest object detection model, YOLOv8, with MobileNetV3 backbone structure, to design and train a
                model capable of detecting the presence of vehicles in parking spaces. This model can be deployed on edge devices with limited
                computational power (Raspberry Pi) to capture and determine if a parking slot is empty or occupied.
                The project also involves the design and building of a backend system structure and the use of LoRaWAN technology to transmit parking space availability information to
                the backend, which can then be used to inform drivers of available parking spaces.
              </Typography>
              <Typography variant="subtitle1" style={{ textAlign: "match-parent", fontSize: "1.2rem", marginBottom: "1rem", fontWeight: "bold" }}>
                Current Progress
              </Typography>
              <Typography variant="body1" style={{ textAlign: "justify", fontSize: "1.2rem", marginBottom: "1rem" }}>
                In the current stage, the project has completed the training of the YOLOv8 model and the deployment of the model on a Raspberry Pi. The application can pass the captured vacancy information to the backend AWS server via the LoRaWAN network. The backend server then processes and merges the information from different edge devices and stores it in the database.
                The project frontend is currently under development and will be used to display the parking space availability information to the users, the basic version of the frontend can
                be found here: <a href="https://fyp-react-control-panel.pages.dev/" style={{ textDecoration: "none", color: "blue" }}>https://fyp-react-control-panel.pages.dev/</a>. 
                The model utilized in the project is also undergoing fine-tuning to improve performance and versatility.
              </Typography>
              <img src={projectImage} alt="Project Image" style={{ width: "50%", height: "auto", objectFit: "cover", marginBottom: "1rem" }} />
              <Typography variant="body1" style={{ textAlign: "justify", fontSize: "1.2rem", marginBottom: "1rem" }}>
                The project is currently in the development stage. More details about the project can be found at: 
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