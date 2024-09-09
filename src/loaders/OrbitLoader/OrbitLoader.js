import React from 'react';
import './OrbitLoader.css';

const OrbitLoader = ({ size = 40, color = '#61dafb' }) => {
  return (
    <div className="orbit-loader" style={{ width: size, height: size }}>
      <div className="center" style={{ backgroundColor: color }}></div>
      <div className="orbit orbit1">
        <div className="planet" style={{ backgroundColor: color }}></div>
      </div>
      <div className="orbit orbit2">
        <div className="planet" style={{ backgroundColor: color }}></div>
      </div>
      <div className="orbit orbit3">
        <div className="planet" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default OrbitLoader;