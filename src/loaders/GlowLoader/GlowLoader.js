import React from 'react';
import './GlowLoader.css';

const GlowLoader = ({ size = 40, color = '#61dafb' }) => {
  return (
    <div className="glow-loader" style={{ width: size, height: size }}>
      <div className="glow-circle" style={{ '--main-color': color }}></div>
    </div>
  );
};

export default GlowLoader;