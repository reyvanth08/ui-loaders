import React from 'react';
import './WaveLoader.css';

const WaveLoader = ({ size = 40, color = '#61dafb' }) => {
  return (
    <div className="wave-loader" style={{ width: size, height: size }}>
      {[...Array(5)].map((_, index) => (
        <div 
          key={index} 
          className="wave" 
          style={{ 
            backgroundColor: color,
            animationDelay: `${index * 0.1}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default WaveLoader;