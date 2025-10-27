
import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-surface/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
        <span className="text-primary font-semibold text-lg">{Math.round(progress)}%</span>
        <div className="w-40 h-1 mt-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-150" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-on-surface text-sm mt-3">Loading Model...</p>
      </div>
    </Html>
  );
};

export default Loader;
