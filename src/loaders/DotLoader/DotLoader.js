import React from 'react';
import './DotLoader.css';

const DotLoader = ({ size = 40, color = '#61dafb' }) => {
  return (
    <div className="dot-loader" style={{ width: size, height: size }}>
      <div className="dot" style={{ backgroundColor: color }}></div>
      <div className="dot" style={{ backgroundColor: color }}></div>
      <div className="dot" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default DotLoader;