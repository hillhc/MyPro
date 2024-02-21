import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Collapsible1 = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  
  return (
    <div>
      <Button variant="contained" color="primary" onClick={toggle}>
        FYP
      </Button>
      {open && (
        <div className="toggle">{props.children}</div>
      )}
    </div>
  );
};

export default Collapsible1;