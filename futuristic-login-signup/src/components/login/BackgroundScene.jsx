import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const RotatingSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.y = elapsedTime * 0.5; // Slow rotation
      sphereRef.current.position.x = Math.sin(elapsedTime) * 2; // Oscillating movement
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, -5]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#ff69b4" />
    </mesh>
  );
};

const RotatingCube = () => {
  const cubeRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (cubeRef.current) {
      cubeRef.current.rotation.x = elapsedTime * 0.5;
      cubeRef.current.rotation.y = elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={cubeRef} position={[-3, 1, -7]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#00bcd4" />
    </mesh>
  );
};

const BackgroundScene = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* 3D Objects */}
      <RotatingSphere />
      <RotatingCube />

      {/* Controls */}
      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  );
};

export default BackgroundScene;
