
import React from 'react';
import type { Car } from '../types';
import { ArrowUpIcon } from './icons';

interface FooterStatsProps {
  car: Car;
  isVisible: boolean;
  onToggle: () => void;
}

const StatItem: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div className="text-center">
    <p className="text-sm text-gray-600">{label}</p>
    <p className="text-lg font-semibold">{value}</p>
  </div>
);

const FooterStats: React.FC<FooterStatsProps> = ({ car, isVisible, onToggle }) => {
  return (
    <div
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] lg:w-1/2 max-w-2xl transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-[calc(100%-4rem)]'
      }`}
    >
      <div className="relative bg-white/50 backdrop-blur-lg p-6 rounded-t-3xl shadow-lg">
        <button
          onClick={onToggle}
          className="absolute -top-5 right-5 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110"
        >
          <ArrowUpIcon className={`w-5 h-5 transition-transform duration-300 ${isVisible ? '' : 'rotate-180'}`} />
        </button>
        <div className="grid grid-cols-3 gap-4">
          <StatItem label="Top Speed" value={`${car.topSpeed} km/h`} />
          <StatItem label="Engine" value={car.engine} />
          <StatItem label="Gears" value={car.gears} />
        </div>
      </div>
    </div>
  );
};

export default FooterStats;
