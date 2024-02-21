import React, { useState } from 'react';

const Collapsible1 = (props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  
  return (
    <div>
      <button onClick={toggle}>toggle</button>
      {open && (
        <div className="toggle">{props.children}</div>
      )}
    </div>
  );
};

export default Collapsible1;