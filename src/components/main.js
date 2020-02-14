import * as THREE from 'three'
import React, { Suspense, useRef, useEffect, useState } from 'react'
import { createPortal, extend, useFrame, useThree } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import DNA from './dna'

extend({ EffectComposer, RenderPass })

export default function Main() {
  const onHover = (e) => {
    const { name, material } = e.object
    console.log(name)
    
    if (name.includes('Adenine')) {
      material.color = { r: 0.6, g: 0, b: 0 }
    }
    if (name.includes('Guanine')) {
      material.color = { r: 0, g: 0.6, b: 0 }
    }    
    if (name.includes('Thymine')) {
      material.color = { r: 0, g: 0, b: 0.6 }
    }
    if (name.includes('Cytosine')) {
      material.color = { r: 0.6, g: 0, b: 0.6 }
    }
    if (name.includes('Strand')) {
      material.color = { r: 0.6, g: 0.6, b: 0 }
    }
  }
  const onExit = (e) => {
    const { name, material } = e.object
    material.color = { r: 0.64, g: 0.64, b: 0.64 }
  }
  const [scene] = useState(() => new THREE.Scene())
  const composer = useRef()
  const { gl, size, camera } = useThree()
  useEffect(() => void composer.current.setSize(size.width, size.height), [size])
  useFrame(({ gl }) => void ((gl.autoClear = true), composer.current.render()), 1)
  return createPortal(
    <>
      <effectComposer ref={composer} args={[gl]}>
        {scene && (
          <>
            <renderPass attachArray="passes" scene={scene} camera={camera} />
          </>
        )}
      </effectComposer>
      <ambientLight />
      <spotLight position={[100, 10, 10]} />
      <mesh 
        onPointerOver={e => onHover(e)}
        onPointerOut={e => onExit(e)}
      >
      <Suspense fallback={<React.Fragment/>}>{<DNA />}</Suspense>
      </mesh>
    </>,
    scene
  )
}