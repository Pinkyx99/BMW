
import React from 'react';

interface Control {
  id: string;
  icon: React.ReactNode;
}

interface SideControlsProps {
  controls: Control[];
}

const SideControls: React.FC<SideControlsProps> = ({ controls }) => {
  return (
    <div className="flex flex-col gap-4">
      {controls.map((control) => (
        <button
          key={control.id}
          className="w-12 h-12 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:bg-white hover:scale-110"
        >
          {control.icon}
        </button>
      ))}
    </div>
  );
};

export default SideControls;
