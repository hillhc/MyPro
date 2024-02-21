import React, { useState } from 'react';

const Collapsible1 = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const Collapsible = (props) => {}
  return (
    <div>
      <button onClick={toggle}>toggle</button>
      {open &&
        <div className="toggle">{props.children}</div>
      }
    </div>
  );
};

export default Collapsible1;