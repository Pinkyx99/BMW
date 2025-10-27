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
    <div className="flex flex-col gap-1 items-end text-right">
      <p className="text-md font-medium text-gray-500 uppercase tracking-widest">Starting Price</p>
      <p className="text-5xl lg:text-6xl font-bold tracking-tighter">{formatCurrency(car.price).replace(',', '.')}</p>
      <p className="text-sm text-gray-500 uppercase tracking-wide">+{formatNumber(car.accessoriesPrice)} in optional accessories</p>
    </div>
  );
};

export default PurchaseInfo;
