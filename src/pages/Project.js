import React from "react";
import backgroundabout from "../resource/backgroundabout.jpg"
import Collapsible1 from "../resource/project1"

function Project() {
  return(
    <div className="Project">
    <Collapsible1 label="Final Year Project">
      <h1>introduction</h1>
      <p>
        The collapsible component puts long sections of the information under a
        block enabling users to expand or collapse to access its details.
      </p>
    </Collapsible1>
    </div>
  )
}

export default Project;