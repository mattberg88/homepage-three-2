import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from 'react-three-fiber'
import dna from './assets/DNA.glb'

export default function DNA() {
  const gltf = useLoader(GLTFLoader, dna)
  return <primitive object={gltf.scene} position={[0, 0, 0]} />
}