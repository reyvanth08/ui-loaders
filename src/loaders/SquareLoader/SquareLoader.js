import React from 'react';
import './SquareLoader.css';

const SquareLoader = ({ size = 40, color = '#61dafb' }) => {
  return (
    <div className="square-loader" style={{ width: size, height: size }}>
      <div className="square" style={{ borderColor: color }}></div>
    </div>
  );
};

export default SquareLoader;