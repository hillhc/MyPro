import React from "react";
import backgroundabout from "../resource/backgroundabout.jpg"
import Collapsible1 from "../resource/project1"

function Project() {
  return(
    <div className="Project" style={{
      backgroundImage: `url(${backgroundabout})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      minHeight: '100vh'
    }}>
      <h1>To be Update !</h1>
      <hr />
      <Collapsible1/>
    </div>
  )
}

export default Project;