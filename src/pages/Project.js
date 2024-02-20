import React from "react";
import "react-vertical-timeline-component/style.min.css";
import backgroundabout from "../resource/backgroundabout.jpg"

function Project() {
  return(
    <div className="Project" style={{
      backgroundImage: `url(${backgroundabout})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      minHeight: '100vh'
    }}>
      <h1>To be Update !</h1>
    </div>
  )
}