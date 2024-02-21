import React from 'react';

const Collapsible1 = () => {
    const [open, setOPen] = useState(false);
    return (
      <div>
        <button>toggle</button>
        {open && <div>toggle me</div>}
      </div>
    );
  };
export default Collapsible1;