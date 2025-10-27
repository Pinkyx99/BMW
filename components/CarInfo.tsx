
import React from 'react';
import type { Car } from '../types';

interface CarInfoProps {
  car: Car;
}

const CarInfo: React.FC<CarInfoProps> = ({ car }) => {
  return (
    <div className="flex flex-col gap-4 text-center lg:text-left">
      <div className="flex items-center justify-center lg:justify-start gap-4">
        <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter">{car.name}</h1>
      </div>
      <p className="text-lg text-gray-500">{car.modelCode}</p>
      
      <p className="mt-24 text-2xl font-light italic self-center lg:self-start">
        Modern BMW sports car
      </p>
    </div>
  );
};

export default CarInfo;
