import React from 'react';
import './FullScreenLoader.css';
import CircleLoader from '../CircleLoader/CircleLoader';
import PulseLoader from '../PulseLoader/PulseLoader';
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader';
import DotLoader from '../DotLoader/DotLoader';
import RingLoader from '../RingLoader/RingLoader';
import WaveLoader from '../WaveLoader/WaveLoader';
import BounceLoader from '../BounceLoader/BounceLoader';
import SquareLoader from '../SquareLoader/SquareLoader';
import HeartbeatLoader from '../HeartbeatLoader/HeartbeatLoader';
import GlowLoader from '../GlowLoader/GlowLoader';
import OrbitLoader from '../OrbitLoader/OrbitLoader';

const FullScreenLoader = ({ 
  loaderType = 'circle',
  size = 60,
  color = '#61dafb',
  thickness,
  speed,
  backgroundColor = 'rgba(0, 0, 0, 0.5)',
  isLoading = true
}) => {
  if (!isLoading) return null;

  let Loader;
  switch (loaderType) {
    case 'circle':
      Loader = CircleLoader;
      break;
    case 'pulse':
      Loader = PulseLoader;
      break;
    case 'spinner':
      Loader = SpinnerLoader;
      break;
    case 'dot':
      Loader = DotLoader;
      break;
    case 'ring':
      Loader = RingLoader;
      break;
    case 'wave':
      Loader = WaveLoader;
      break;
    case 'bounce':
      Loader = BounceLoader;
      break;
    case 'square':
      Loader = SquareLoader;
      break;
    case 'heartbeat':
      Loader = HeartbeatLoader;
      break;
    case 'glow':
      Loader = GlowLoader;
      break;
    case 'orbit':
      Loader = OrbitLoader;
      break;
    default:
      Loader = CircleLoader;
  }

  return (
    <div className="full-screen-loader" style={{ backgroundColor }}>
      <div className="loader-container">
        <Loader size={size} color={color} thickness={thickness} speed={speed} />
      </div>
    </div>
  );
};

export default FullScreenLoader;