import React from "react";
import backgroundabout from "../resource/backgroundabout.jpg"
import Collapsible1 from "../resource/project1"

function Project() {
  return(
    <div className="Project">
      <hr />
    <h1>Final Year Project</h1>
    <Collapsible1 label="Final Year Project">
      <p>
        This will contain the details of my final year project. Update will be done later.
      </p>
    </Collapsible1>
    </div>
  )
}

export default Project;