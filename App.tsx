
import React, { useState, Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import Header from './components/Header';
import CarViewer from './components/CarViewer';
import CarInfo from './components/CarInfo';
import PurchaseInfo from './components/PurchaseInfo';
import SideControls from './components/SideControls';
import FooterStats from './components/FooterStats';
import { CAR_DATA } from './constants';
import { ViewControls, WheelControls } from './components/icons';

const App: React.FC = () => {
  const [isStatsVisible, setIsStatsVisible] = useState(true);
  const currentCar = CAR_DATA[0];

  // Preload the model to start downloading it as soon as possible.
  useGLTF.preload(currentCar.modelUrl);

  const rightControls = [
    { id: 'view1', icon: <ViewControls /> },
    { id: 'view2', icon: <ViewControls variant="filled" /> },
    { id: 'wheels', icon: <WheelControls /> },
  ];

  return (
    <div className="bg-base min-h-screen font-sans text-on-surface flex flex-col items-center justify-center p-4 lg:p-6">
      <div className="w-full max-w-screen-2xl h-[95vh] bg-surface rounded-3xl shadow-2xl p-6 lg:p-8 flex flex-col relative overflow-hidden">
        <Header />
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_2.5fr_1fr] grid-rows-[auto_1fr_auto] gap-4 relative h-full">
          <div className="lg:col-start-1 lg:row-start-2 flex flex-col justify-center items-center lg:items-start z-10">
            <CarInfo car={currentCar} />
          </div>

          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-3 -mx-6 lg:mx-0 relative flex items-center justify-center h-full min-h-[300px] lg:min-h-0">
             <Suspense fallback={<div className="flex items-center justify-center h-full text-on-surface">Initializing 3D viewer...</div>}>
                <CarViewer modelUrl={currentCar.modelUrl} />
            </Suspense>
          </div>

          <div className="lg:col-start-3 lg:row-start-2 flex flex-col justify-center items-center lg:items-end text-right z-10">
            <PurchaseInfo car={currentCar} />
          </div>
          
          <div className="hidden lg:flex lg:col-start-3 lg:row-start-2 justify-start items-center pl-8 z-10">
            <SideControls controls={rightControls} />
          </div>

        </main>
        <FooterStats car={currentCar} isVisible={isStatsVisible} onToggle={() => setIsStatsVisible(!isStatsVisible)} />
      </div>
    </div>
  );
};

export default App;
