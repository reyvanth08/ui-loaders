import React from 'react';
import './PulseLoader.css';

const PulseLoader = ({ size = 40, color = '#61dafb' }) => {
  return (
    <div className="pulse-loader" style={{ width: size, height: size }}>
      <div className="pulse" style={{ borderColor: color }}></div>
    </div>
  );
};

export default PulseLoader;