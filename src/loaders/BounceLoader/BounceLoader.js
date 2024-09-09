import React from 'react';
import './BounceLoader.css';

const BounceLoader = ({ size = 40, color = '#61dafb' }) => {
  return (
    <div className="bounce-loader" style={{ width: size, height: size }}>
      <div className="bounce-ball" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default BounceLoader;