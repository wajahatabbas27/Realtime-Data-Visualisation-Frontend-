// src/components/ControlPanel.js
import React from "react";

const ControlPanel = ({ setRefreshInterval }) => {
  const handleIntervalChange = (event) => {
    setRefreshInterval(Number(event.target.value));
  };

  return (
    <div className='control-panel'>
      <label>
        Refresh Interval:
        <select onChange={handleIntervalChange}>
          <option value={1000000}>10 seconds</option>
          <option value={3000000}>30 seconds</option>
          <option value={6000000}>1 minute</option>
        </select>
      </label>
    </div>
  );
};

export default ControlPanel;
