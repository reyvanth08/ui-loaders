import React from 'react';
import './SpinnerLoader.css';

const SpinnerLoader = ({ size = 40, color = '#61dafb' }) => {
  return (
    <div className="spinner-loader" style={{ width: size, height: size }}>
      <div className="spinner" style={{ width: '40%', height: '40%' }}>
        {[...Array(12)].map((_, index) => (
          <div 
            key={index} 
            className="spinner-blade"
            style={{
              background: color,
              transform: `rotate(${index * 30}deg) translate(0, -150%)`,
              animationDelay: `${-0.083 * index}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SpinnerLoader;