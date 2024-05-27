import React, { useState } from 'react';
import '../styles/Picker.css'; // Ensure this file is correctly imported

const Picker = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  }

  return (
    <div className="picker">
      <button
        className={`picker-button ${activeButton === 'A' ? 'active' : ''}`}
        onClick={() => handleButtonClick('A')}
      >
        Schedule
      </button>
      <button
        className={`picker-button ${activeButton === 'B' ? 'active' : ''}`}
        onClick={() => handleButtonClick('B')}
      >
        Store Schedule
      </button>
      <button
        className={`picker-button ${activeButton === 'C' ? 'active' : ''}`}
        onClick={() => handleButtonClick('C')}
      >
        Shift Trade
      </button>
    </div>
  );
}

export default Picker;
