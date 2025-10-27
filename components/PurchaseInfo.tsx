
import React from 'react';
import type { Car } from '../types';

interface PurchaseInfoProps {
  car: Car;
}

const PurchaseInfo: React.FC<PurchaseInfoProps> = ({ car }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value).replace('$', '$ ');
  };
  
  const formatNumber = (value: number) => {
      return new Intl.NumberFormat('de-DE').format(value);
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="text-5xl lg:text-6xl font-bold tracking-tighter">{formatCurrency(car.price).replace(',', '.')}</p>
      <p className="text-md text-gray-500">{formatNumber(car.accessoriesPrice)} accessories</p>
    </div>
  );
};

export default PurchaseInfo;
