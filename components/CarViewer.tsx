
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import Loader from './Loader';

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
  return <primitive object={scene} ref={group} dispose={null} position={[0, -0.05, 0]} />;
};

const SpinningPlatform: React.FC = () => {
    const platformRef = useRef<THREE.Mesh>(null!);
  
    // Rotate the platform on every frame
    useFrame((_, delta) => {
      if (platformRef.current) {
        platformRef.current.rotation.y += delta * 0.3;
      }
    });
  
    return (
      <mesh
        ref={platformRef}
        position={[0, -0.1, 0]}
        receiveShadow
      >
        <cylinderGeometry args={[2.8, 2.8, 0.1, 64]} />
        <meshStandardMaterial color="#222222" metalness={0.2} roughness={0.6} />
      </mesh>
    );
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
      <Suspense fallback={<Loader />}>
        {/* 
          Stage provides a complete scene setup.
          - 'preset="rembrandt"' sets up a classic 3-point lighting rig.
          - 'environment="city"' provides realistic reflections.
          - It automatically centers and fits the model to the view.
        */}
        <Stage environment="city" intensity={0.6} preset="rembrandt" shadows={{ type: 'contact', opacity: 0.7, blur: 2 }}>
          <Model url={modelUrl} />
          <SpinningPlatform />
        </Stage>
      </Suspense>
      
      {/* 
        OrbitControls allows the user to rotate and zoom.
        - Re-enabling zoom and removing angle locks gives full control.
        - autoRotate is disabled to let the platform provide the motion.
      */}
      <OrbitControls
        makeDefault
        enableZoom={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
};

export default CarViewer;
