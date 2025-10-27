import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  url: string;
}

const Model: React.FC<ModelProps> = ({ url }) => {
  const group = useRef<THREE.Group>(null!);
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play the first animation found in the GLB file and let it loop
    if (actions && animations.length > 0) {
      const animationName = animations[0].name;
      actions[animationName]?.play();
    }
  }, [actions, animations]);


  // Enable shadows for all meshes in the model
  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return <primitive object={scene} ref={group} dispose={null} />;
};


interface CarViewerProps {
  modelUrl: string;
}

const CarViewer: React.FC<CarViewerProps> = ({ modelUrl }) => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ fov: 45 }}
    >
      <Suspense fallback={null}>
        {/* 
          Stage provides a complete scene setup.
          - 'preset="rembrandt"' sets up a classic 3-point lighting rig.
          - 'environment="city"' provides realistic reflections.
          - It automatically centers and fits the model to the view.
        */}
        <Stage environment="city" intensity={0.6} preset="rembrandt">
          <Model url={modelUrl} />
        </Stage>
      </Suspense>
      
      {/* 
        OrbitControls allows the user to rotate and zoom.
        - Re-enabling zoom and removing angle locks gives full control.
      */}
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.8}
        enableZoom={true}
      />
    </Canvas>
  );
};

export default CarViewer;