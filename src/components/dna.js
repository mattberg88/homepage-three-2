import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from 'react-three-fiber'
import dna from '../assets/models/DNA.glb'

export default function DNA() {
  const gltf = useLoader(GLTFLoader, dna)
  return <primitive object={gltf.scene} rotation={[40, 20, 0]} position={[0, -1, 3]} />
}