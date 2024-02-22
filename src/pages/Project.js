import React from "react";
import backgroundabout from "../resource/backgroundabout.jpg";
import { Card, CardContent, Typography } from "@mui/material";

function Project() {
  return (
    <div className="Project">
      <Card>
        <CardContent>
          <Typography variant="h4" component="div">
            Final Year Project
          </Typography>
          <Typography variant="h5" component="div" mt={1}>
            Advanced Video Analytics and Edge AI for Smart Carpark Systems (2023-2024)
          </Typography>
          <hr />
          <Collapsible1 label="Final Year Project">
            <Typography variant="body1">
              The project under the supervision of Prof. Gary Shueng Han CHAN to design a smart car park system.
              The project involves the use of the latest object detection model, YOLOv8, with MobileNetV3 backbone structure, to design and train a
              model capable of detecting the presence of vehicles in parking spaces. This model can be deployed on the edge devices with limited
              computational power (Raspberry Pi) to capture and determine if a parking slot is empty or occupied.
              The project also involves the design and building of backend system structure and the use of LoRaWAN technology to transmit the parking space availability information to
              the backend, which can then be used to inform drivers of available parking spaces. <br />
              The project is currently in the development stage. More details about the project can be found at: <a href="http://eek123.ust.hk/SmartCarpark">http://eek123.ust.hk/SmartCarpark</a>
            </Typography>
          </Collapsible1>
          <hr />
        </CardContent>
      </Card>
    </div>
  );
}

export default Project;