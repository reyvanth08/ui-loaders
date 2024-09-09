import React from 'react';
import './HeartbeatLoader.css';

const HeartbeatLoader = ({ size = 40, color = '#61dafb' }) => {
  return (
    <div className="heartbeat-loader" style={{ width: size, height: size }}>
      <div className="heart" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default HeartbeatLoader;