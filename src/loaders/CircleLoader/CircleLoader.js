import React from 'react';
import './CircleLoader.css';

const CircleLoader = ({ 
  size = 40, 
  color = '#61dafb', 
  thickness = 4, 
  speed = 1 
}) => {
  return (
    <div className="circle-loader" style={{ width: size, height: size }}>
      <div className="circle-loader-inner">
        <div 
          className="circle outer" 
          style={{ 
            borderWidth: thickness, 
            borderTopColor: color,
            animation: `spin ${1/speed}s cubic-bezier(0.5, 0, 0.5, 1) infinite`
          }}
        ></div>
        <div 
          className="circle inner" 
          style={{ 
            borderWidth: thickness, 
            borderTopColor: color,
            animation: `spin ${1/speed}s cubic-bezier(0.5, 0, 0.5, 1) infinite reverse`
          }}
        ></div>
      </div>
    </div>
  );
};

export default CircleLoader;