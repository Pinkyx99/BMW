import React, { useState, Suspense, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import Header from './components/Header';
import CarViewer from './components/CarViewer';
import CarInfo from './components/CarInfo';
import PurchaseInfo from './components/PurchaseInfo';
import FooterStats from './components/FooterStats';
import { CAR_DATA } from './constants';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [isStatsVisible, setIsStatsVisible] = useState(true);
  const [theme, setTheme] = useState<Theme>('light');
  const currentCar = CAR_DATA[0];

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Preload the model to start downloading it as soon as possible.
  useGLTF.preload(currentCar.modelUrl);

  return (
    <div className="bg-base dark:bg-base-dark min-h-screen font-sans text-on-surface dark:text-on-surface-dark flex flex-col items-center justify-center p-4 lg:p-6">
      <div className="w-full max-w-screen-2xl h-[95vh] bg-surface dark:bg-surface-dark rounded-3xl shadow-2xl p-6 lg:p-8 flex flex-col relative overflow-hidden">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_2.5fr_1fr] grid-rows-[auto_1fr_auto] gap-4 relative h-full">
          <div className="lg:col-start-1 lg:row-start-2 flex flex-col justify-start lg:pt-20 items-center lg:items-start z-10">
            <CarInfo car={currentCar} />
          </div>

          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-3 -mx-6 lg:mx-0 relative flex items-center justify-center h-full min-h-[300px] lg:min-h-0">
             <Suspense fallback={<div className="flex items-center justify-center h-full text-on-surface dark:text-on-surface-dark">Initializing 3D viewer...</div>}>
                <CarViewer modelUrl={currentCar.modelUrl} />
            </Suspense>
          </div>

          <div className="lg:col-start-3 lg:row-start-2 flex flex-col justify-start lg:pt-20 items-center lg:items-end text-right z-10">
            <PurchaseInfo car={currentCar} />
          </div>
          
        </main>
        <FooterStats car={currentCar} isVisible={isStatsVisible} onToggle={() => setIsStatsVisible(!isStatsVisible)} />
        <a
          href="https://www.instagram.com/site.builderhub/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-8 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors z-30"
          aria-label="Made by Ramill, opens Instagram profile in a new tab"
        >
          Made by Ramill
        </a>
      </div>
    </div>
  );
};

export default App;
