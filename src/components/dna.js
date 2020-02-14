import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from 'react-three-fiber'
import dna from '../assets/grouped_dna.glb'

export default function DNA() {
  const gltf = useLoader(GLTFLoader, dna)
  return <primitive object={gltf.scene} color={'red'} rotation={[40, 20, 0]} position={[0, 0, 0]} scale={[0.8, 0.8, 0.8]}/>
}