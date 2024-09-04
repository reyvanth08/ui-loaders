import React from 'react';
import './RingLoader.css';

const RingLoader = ({ size = 40, color = '#61dafb', thickness = 4, speed = 1 }) => {
  return (
    <div className="ring-loader" style={{ width: size, height: size }}>
      <div 
        className="ring" 
        style={{ 
          borderWidth: thickness, 
          borderTopColor: color,
          animation: `ring-spin ${1/speed}s linear infinite`
        }}
      ></div>
    </div>
  );
};

export default RingLoader;