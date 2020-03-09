import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
import dna from '../assets/exported.glb';

export default function DNA() {
  const gltf = useLoader(GLTFLoader, dna);
  return <primitive object={gltf.scene} color="red" rotation={[-1.3, 0, 2.8]} position={[0, 0, 0]} scale={[0.05, 0.05, 0.05]} />;
}
